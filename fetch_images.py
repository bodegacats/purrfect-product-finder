from __future__ import annotations

import csv
import logging
from pathlib import Path
from typing import List

import requests
from bs4 import BeautifulSoup

CSV_PATH = Path(__file__).resolve().parent / "catdata-pipeline" / "affiliates.csv"

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")


def fetch_image_url(url: str) -> str:
    """Return the og:image URL from the given page or empty string on failure."""
    try:
        resp = requests.get(url, timeout=10)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")
        tag = soup.find("meta", property="og:image")
        if tag and tag.get("content"):
            return tag["content"]
    except Exception as exc:
        logging.error("Failed to fetch image from %s: %s", url, exc)
    return ""


def load_rows() -> tuple[List[dict], List[str]]:
    with CSV_PATH.open() as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames or []
    if "image_url" not in fieldnames:
        fieldnames.append("image_url")
    return rows, fieldnames


def write_rows(rows: List[dict], fieldnames: List[str]) -> None:
    with CSV_PATH.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    rows, fieldnames = load_rows()
    for row in rows:
        if row.get("image_url"):
            continue
        url = row.get("amazon_url")
        if not url:
            logging.error("Missing amazon_url for %s", row.get("product_name", ""))
            continue
        row["image_url"] = fetch_image_url(url)
    write_rows(rows, fieldnames)


if __name__ == "__main__":
    main()
