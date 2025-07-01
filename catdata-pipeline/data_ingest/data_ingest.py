"""Data ingestion module for CatData AI project.

Loads affiliate product information from a Google Sheet CSV. The CSV URL is
read from the ``SHEET_CSV_URL`` environment variable. If the variable is not
set or the request fails, the local ``affiliates.csv`` file in the
``catdata-pipeline`` folder is used as a fallback.

The CSV rows are parsed into dictionaries with keys ``product_name``,
``amazon_url``, ``chewy_url``, ``direct_url`` and ``image_url``. The list of
rows is then wrapped in an object with a generation timestamp and written to
``data/ratings_raw.json``.
"""

from __future__ import annotations

import csv
import json
import logging
import os
import sys
from datetime import datetime
from pathlib import Path
from typing import List, Dict

import requests

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
DATA_DIR.mkdir(exist_ok=True)
RAW_RATINGS_FILE = DATA_DIR / "ratings_raw.json"

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")

AFFILIATE_CSV = Path(__file__).resolve().parents[1] / "affiliates.csv"


def load_csv_rows() -> List[Dict[str, str]]:
    """Load affiliate rows from sheet or local CSV."""

    sheet_url = os.getenv("SHEET_CSV_URL")
    csv_text = None

    if sheet_url:
        try:
            response = requests.get(sheet_url, timeout=10)
            response.raise_for_status()
            csv_text = response.text
            print(f"Fetched CSV from {sheet_url}")
        except Exception as e:  # pragma: no cover - network failure path
            logging.error("Failed to fetch CSV from %s: %s", sheet_url, e)

    if csv_text is None:
        try:
            csv_text = AFFILIATE_CSV.read_text()
            print(f"Loaded CSV from local {AFFILIATE_CSV}")
        except Exception as e:
            logging.error("Failed to read local CSV: %s", e)
            raise

    reader = csv.DictReader(csv_text.splitlines())
    rows = []
    for row in reader:
        rows.append(
            {
                "product_name": row.get("product_name", ""),
                "amazon_url": row.get("amazon_url", ""),
                "chewy_url": row.get("chewy_url", ""),
                "direct_url": row.get("direct_url", ""),
                "image_url": row.get("image_url", ""),
            }
        )
    return rows


def main() -> None:
    """Generate ratings file from CSV."""

    try:
        ratings = load_csv_rows()
        RAW_RATINGS_FILE.write_text(
            json.dumps(
                {"generated": datetime.utcnow().isoformat(), "ratings": ratings},
                indent=2,
            )
        )
        print(f"Wrote raw ratings to {RAW_RATINGS_FILE}")
    except Exception as e:
        logging.error("Failed to write ratings file: %s", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
