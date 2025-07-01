"""Publish generated content to Lovable CMS."""

from __future__ import annotations

import csv
import os
import sys
import csv
from datetime import datetime
from pathlib import Path

import logging
import requests

CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
CMS_API_URL = os.getenv("CMS_API_URL", "https://cms.example.com/api/pages")
CMS_API_KEY = os.getenv("CMS_API_KEY", "")

DISCLOSURE_LINE = (
    "FTC disclosure: This article contains affiliate links and we may earn"
    " a commission on qualifying purchases."
)

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")
    """Create or update a page via Lovable CMS API."""
    if DISCLOSURE_LINE not in body:
        body = f"{DISCLOSURE_LINE}\n\n{body}"
    payload = {
        "title": title,
        "body": body,
        "meta_description": f"Article about {title}",
        "publish_date": datetime.utcnow().isoformat(),
    }
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
            success = False

    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
