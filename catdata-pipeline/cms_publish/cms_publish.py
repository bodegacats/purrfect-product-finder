"""Publish generated content to Lovable CMS."""

from __future__ import annotations

import csv
import os
import sys
from datetime import datetime
from pathlib import Path

import logging
import requests

CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
CSV_FILE = Path(__file__).resolve().parents[1] / "affiliates.csv"
CMS_API_URL = os.getenv("CMS_API_URL", "https://cms.example.com/api/pages")
CMS_API_KEY = os.getenv("CMS_API_KEY", "")

DISCLOSURE_LINE = (
    "FTC disclosure: This article contains affiliate links and we may earn"
    " a commission on qualifying purchases."
)

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")


def publish_page(title: str, body: str, image_url: str | None = None) -> bool:
    """Create or update a page via Lovable CMS API."""
    if not body.startswith(DISCLOSURE_LINE):
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
    except Exception as e:
        logging.error("Failed to publish %s: %s", title, e)
        return False


def main() -> None:
    success = True
    rows = []
    if CSV_FILE.exists():
        with CSV_FILE.open() as f:
            rows = list(csv.DictReader(f))
    else:
        logging.error("CSV file %s not found", CSV_FILE)

    for row in rows:
        title = row.get("product_name") or row.get("title") or ""
        slug = title.lower().replace(" ", "_")
        md_file = CONTENT_DIR / f"{slug}.md"
        if not md_file.exists():
            logging.error("Missing markdown for %s", title)
            success = False
            continue
        body = md_file.read_text()
        if not publish_page(title, body, row.get("image_url")):
            success = False

    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
