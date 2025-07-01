"""Rating computation for CatData AI project."""

from __future__ import annotations

import json
from pathlib import Path
from typing import List, Dict
import logging
import math
import sys

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
RAW_RATINGS_FILE = DATA_DIR / "ratings_raw.json"
RATINGS_FILE = DATA_DIR / "ratings.json"

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")

WEIGHTS = {
    "durability": 0.3,
    "safety": 0.25,
    "value": 0.25,
    "convenience": 0.2,
}

logger = logging.getLogger(__name__)


def compute_lives_rating(entry: Dict[str, float]) -> float:

    score = 0.0
    for key, weight in WEIGHTS.items():
        raw_value = entry.get(key)
        if raw_value is None:
            logger.warning("Missing key '%s' when computing rating", key)
            value = 0
        try:
            numeric = float(value)
            if math.isnan(numeric) or math.isinf(numeric):
                raise ValueError()
        except (TypeError, ValueError):
            numeric = 0.0


def process_ratings(raw_data: Dict[str, List[Dict[str, float]]]) -> Dict[str, List[Dict[str, float]]]:
    """Add ``lives_rating`` to each rating entry."""
    result = {}
    for topic, entries in raw_data.items():
        result[topic] = []
        for entry in entries:
            entry_with_rating = dict(entry)
            entry_with_rating["lives_rating"] = compute_lives_rating(entry)
            result[topic].append(entry_with_rating)
    return result


def main() -> None:
    """Read RAW_RATINGS_FILE and write RATINGS_FILE with lives_rating."""
    try:
        data = json.loads(RAW_RATINGS_FILE.read_text())
    except Exception as e:
        logging.error("Failed to read raw ratings file: %s", e)
        sys.exit(1)

    processed = process_ratings(data["ratings"])
    try:
        RATINGS_FILE.write_text(
            json.dumps({"generated": data.get("generated"), "ratings": processed}, indent=2)
        )
        print(f"Wrote processed ratings to {RATINGS_FILE}")
    except Exception as e:
        logging.error("Failed to write ratings file: %s", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
