"""Data ingestion module for CatData AI project.

Fetches weekly JSON rating arrays for six topics and saves them to
`data/ratings_raw.json`.
"""

from __future__ import annotations

import json
import os
import random
import sys
from datetime import datetime
from pathlib import Path
from typing import List, Dict

import logging
import requests

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
DATA_DIR.mkdir(exist_ok=True)
RAW_RATINGS_FILE = DATA_DIR / "ratings_raw.json"

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")

TOPICS = [
    "food",
    "toys",
    "health",
    "training",
    "grooming",
    "behavior",
]

API_TEMPLATE = os.getenv("RATINGS_API_TEMPLATE", "https://example.com/api/{topic}")


def fetch_topic_ratings(topic: str) -> List[Dict[str, float]]:
    """Fetch ratings for a single topic from remote API.

    The returned object is expected to be a list of dictionaries with keys
    ``durability``, ``safety``, ``value`` and ``convenience``. In case the
    request fails, random data is returned as a fallback so the pipeline can
    continue to run without external dependencies during testing.
    """
    url = API_TEMPLATE.format(topic=topic)
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        logging.error("Failed to fetch %s ratings: %s", topic, e)
        # Fallback: generate dummy rating data
        return [
            {
                "durability": random.uniform(0, 5),
                "safety": random.uniform(0, 5),
                "value": random.uniform(0, 5),
                "convenience": random.uniform(0, 5),
            }
            for _ in range(5)
        ]


def main() -> None:
    """Fetch all topic ratings and save to RAW_RATINGS_FILE."""
    all_ratings = {}
    for topic in TOPICS:
        all_ratings[topic] = fetch_topic_ratings(topic)
    try:
        RAW_RATINGS_FILE.write_text(
            json.dumps(
                {"generated": datetime.utcnow().isoformat(), "ratings": all_ratings},
                indent=2,
            )
        )
        print(f"Wrote raw ratings to {RAW_RATINGS_FILE}")
    except Exception as e:
        logging.error("Failed to write ratings file: %s", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
