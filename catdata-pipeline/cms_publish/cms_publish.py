"""Publish generated content to Lovable CMS."""

from __future__ import annotations

import csv
import logging
import os
import sys
from datetime import datetime
from pathlib import Path

import requests


CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
AFFILIATE_CSV = Path(__file__).resolve().parents[1] / "affiliates.csv"
CMS_API_URL = os.getenv("CMS_API_URL", "https://cms.example.com/api/pages")
CMS_API_KEY = os.getenv("CMS_API_KEY", "")

DISCLOSURE_LINE = "As an Amazon Associate I earn from qualifying purchases."

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")


def load_rows() -> list[dict]:
    """Load affiliate rows from CSV."""
    try:
        with AFFILIATE_CSV.open() as f:
            reader = csv.DictReader(f)
            return list(reader)
    except Exception as exc:  # pragma: no cover - filesystem failure
        logging.error("Failed to read %s: %s", AFFILIATE_CSV, exc)
        return []


def publish_page(title: str, body: str, image_url: str | None = None) -> bool:
    """Create or update a page via Lovable CMS API."""
    if not body.lstrip().startswith(DISCLOSURE_LINE):
        body = f"{DISCLOSURE_LINE}\n\n{body}"

    payload = {
        "title": title,
        "body": body,
        "meta_description": f"Article about {title}",
        "publish_date": datetime.utcnow().isoformat(),
    }
    if image_url:
        payload["featured_image"] = image_url
    headers = {"Authorization": f"Bearer {CMS_API_KEY}"}
    try:
        resp = requests.post(CMS_API_URL, json=payload, headers=headers, timeout=10)
        resp.raise_for_status()
        print(f"Published {title}")
        return True
    except Exception as e:  # pragma: no cover - network failure
        logging.error("Failed to publish %s: %s", title, e)
        return False


def main() -> None:
    success = True
    rows = load_rows()
    for row in rows:
        title = row.get("product_name", "").strip() or "Untitled"
        image_url = row.get("image_url", "")
        md_file = CONTENT_DIR / f"{title}.md"
        if not md_file.exists():
            logging.error("Missing content for %s", title)
            success = False
            continue
        body = md_file.read_text()
        if not publish_page(title, body, image_url):
            success = False

    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()

