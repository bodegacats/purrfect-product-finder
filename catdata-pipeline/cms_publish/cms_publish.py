"""Publish generated content to Lovable CMS."""

from __future__ import annotations

import os
import sys
import csv
from datetime import datetime
from pathlib import Path

import logging
import requests

CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
PAGES_CSV = CONTENT_DIR / "pages.csv"
CMS_API_URL = os.getenv("CMS_API_URL", "https://cms.example.com/api/pages")
CMS_API_KEY = os.getenv("CMS_API_KEY", "")

DISCLOSURE_LINE = "As an Amazon Associate I earn from qualifying purchases."

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")


def load_image_map() -> dict:
    """Return mapping of markdown filename to image URL from PAGES_CSV."""
    if not PAGES_CSV.exists():
        return {}
    with PAGES_CSV.open() as f:
        reader = csv.DictReader(f)
        return {row.get("filename", ""): row.get("image_url", "") for row in reader}


def publish_page(title: str, body: str, featured_image: str | None = None) -> bool:
    """Create or update a page via Lovable CMS API."""
    if DISCLOSURE_LINE not in body:
        body = f"{DISCLOSURE_LINE}\n\n{body}"
    payload = {
        "title": title,
        "body": body,
        "meta_description": f"Article about {title}",
        "publish_date": datetime.utcnow().isoformat(),
    }
    if featured_image:
        payload["featured_image"] = featured_image
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
    images = load_image_map()
    success = True
    for md_file in CONTENT_DIR.glob("*.md"):
        title = md_file.stem.replace("_", " ").title()
        body = md_file.read_text()
        featured_image = images.get(md_file.name)
        if not publish_page(title, body, featured_image):
            success = False
    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
