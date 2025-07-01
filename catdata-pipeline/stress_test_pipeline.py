#!/usr/bin/env python3
"""Stress test the CatData pipeline."""

from __future__ import annotations

import csv
import json
import os
import random
import string
import subprocess
import sys
import threading
import http.server
import socketserver
import tempfile
from pathlib import Path
from typing import List, Dict
from unittest.mock import patch


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
CONTENT_DIR = BASE_DIR / "content"
AFFILIATE_CSV = BASE_DIR / "affiliates.csv"

DISCLOSURE_LINE = "As an Amazon Associate I earn from qualifying purchases."


class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args):  # pragma: no cover - quiet
        pass


class CMSServer(http.server.BaseHTTPRequestHandler):
    count = 0

    def do_POST(self):
        CMSServer.count += 1
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"ok")

    def log_message(self, format: str, *args):  # pragma: no cover - quiet
        pass


def start_file_server(directory: Path) -> tuple[socketserver.TCPServer, str]:
    handler = SilentHandler
    handler.directory = str(directory)
    httpd = socketserver.TCPServer(("localhost", 0), handler)
    url = f"http://localhost:{httpd.server_address[1]}"
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd, url


def start_cms_server() -> tuple[socketserver.TCPServer, str]:
    httpd = socketserver.TCPServer(("localhost", 0), CMSServer)
    url = f"http://localhost:{httpd.server_address[1]}"
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd, url


def generate_csv(path: Path, count: int) -> List[str]:
    topics = []
    with path.open("w", newline="") as f:
        fieldnames = [
            "product_name",
            "topic",
            "durability",
            "safety",
            "value",
            "convenience",
            "amazon_url",
            "chewy_url",
            "direct_url",
            "image_url",
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for i in range(count):
            name = f"Test Product {i+1:03}"
            topic = name  # unique topic per product
            topics.append(topic)
            row = {
                "product_name": name,
                "topic": topic,
                "durability": random.randint(1, 5),
                "safety": random.randint(1, 5),
                "value": random.randint(1, 5),
                "convenience": random.randint(1, 5),
                "amazon_url": f"https://example.com/{i+1:03}?tag=perfectpro05a-20",
                "chewy_url": "",
                "direct_url": "",
                "image_url": "" if i % 7 == 0 else ("not a url" if i % 11 == 0 else f"https://img.example.com/{i}.jpg"),
            }
            writer.writerow(row)
    return topics


def count_entries(data: Dict[str, List[Dict]]) -> int:
    return sum(len(v) for v in data.values())


def run_subprocess(args: List[str], env: dict) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable] + args,
        capture_output=True,
        text=True,
        env=env,
    )


def main() -> int:
    DATA_DIR.mkdir(exist_ok=True)
    CONTENT_DIR.mkdir(exist_ok=True)

    tmpdir = tempfile.TemporaryDirectory()
    tmp_path = Path(tmpdir.name)
    csv_path = tmp_path / "ratings.csv"

    topics = generate_csv(csv_path, 500)

    file_server, file_url = start_file_server(tmp_path)
    env = os.environ.copy()
    env["SHEET_CSV_URL"] = f"{file_url}/{csv_path.name}"

    proc = run_subprocess([str(BASE_DIR / "data_ingest" / "data_ingest.py")], env)
    print("data_ingest output:\n", proc.stdout)
    if proc.returncode != 0:
        print(proc.stderr)
        return 1

    try:
        raw = json.loads((DATA_DIR / "ratings_raw.json").read_text())
        total = count_entries(raw["ratings"])
        assert total == 500
    except Exception as e:
        print("Failed verifying ratings_raw.json:", e)
        return 1
    print("data_ingest success - 500 entries")

    proc = run_subprocess([str(BASE_DIR / "rating" / "rating.py")], env)
    print("rating output:\n", proc.stdout)
    if proc.returncode != 0:
        print(proc.stderr)
        return 1
    try:
        rated = json.loads((DATA_DIR / "ratings.json").read_text())["ratings"]
        total = count_entries(rated)
        assert total == 500
        for entries in rated.values():
            for item in entries:
                r = item.get("lives_rating")
                assert isinstance(r, float)
                assert 1.0 <= r <= 9.0
    except Exception as e:
        print("Failed verifying ratings.json:", e)
        return 1
    print("rating success - ratings.json valid")

    def run_content():
        with patch("openai.ChatCompletion.create") as mock_create:
            class Resp:
                def __init__(self, text):
                    self.choices = [type("o", (), {"message": {"content": text}})]

            mock_create.return_value = Resp("Generated text")
            runpy.run_path(str(BASE_DIR / "content_gen" / "content_gen.py"), run_name="__main__")

    import runpy

    run_content()

    md_files = list(CONTENT_DIR.glob("*.md"))
    if len(md_files) != len(topics):
        print(f"Expected {len(topics)} markdown files, found {len(md_files)}")
        return 1
    for path in md_files:
        text = path.read_text().strip()
        if not (text.startswith(DISCLOSURE_LINE) and text.endswith(DISCLOSURE_LINE)):
            print(f"Disclosure missing in {path}")
            return 1
    print("content_gen success - markdown files generated")

    # create affiliates csv for cms_publish
    aff_csv = tmp_path / "affiliates.csv"
    with aff_csv.open("w", newline="") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["product_name", "amazon_url", "chewy_url", "direct_url", "image_url"],
        )
        writer.writeheader()
        for t in topics:
            writer.writerow(
                {
                    "product_name": t,
                    "amazon_url": "https://example.com",
                    "chewy_url": "",
                    "direct_url": "",
                    "image_url": "",
                }
            )

    cms_server, cms_url = start_cms_server()
    env["CMS_API_URL"] = cms_url

    def run_cms():
        with patch.dict("sys.modules", {"cms_publish": None}):
            module_globals = runpy.run_path(str(BASE_DIR / "cms_publish" / "cms_publish.py"))
            module_globals["AFFILIATE_CSV"] = aff_csv
            module_globals["CONTENT_DIR"] = CONTENT_DIR
            module_globals["CMS_API_URL"] = cms_url
            module_globals["CMS_API_KEY"] = "test"
            module_globals["DISCLOSURE_LINE"] = DISCLOSURE_LINE
            module_globals["main"]()

    try:
        run_cms()
    except SystemExit as e:
        if e.code:
            print("cms_publish exited with", e.code)
            return 1
    except Exception as e:
        print("cms_publish error:", e)
        return 1

    if CMSServer.count != len(topics):
        print(f"Expected {len(topics)} CMS POSTs, got {CMSServer.count}")
        return 1
    print("cms_publish success - all posts sent")

    file_server.shutdown()
    cms_server.shutdown()
    tmpdir.cleanup()

    return 0


if __name__ == "__main__":
    sys.exit(main())
