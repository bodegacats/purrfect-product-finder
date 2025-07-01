import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "rating"))

import math
import pytest
from rating import compute_lives_rating, process_ratings


@pytest.fixture

def zero_entry():
    return {"durability": 0, "safety": 0, "value": 0, "convenience": 0}


@pytest.fixture
def missing_key_entry():
    # intentionally omit some expected keys
    return {"durability": 2, "safety": 3}


@pytest.fixture
def non_numeric_entry():
    # values include strings and None which should be treated as 0
    return {"durability": "high", "safety": None, "value": "4", "convenience": []}


@pytest.fixture
def multi_product_data():
    return {
        "toys": [
            {"durability": 1, "safety": 2, "value": 3, "convenience": 4},
            {"durability": 4, "safety": 3, "value": 2, "convenience": 1},
        ]
    }


def test_all_zero_scores(zero_entry):
    rating = compute_lives_rating(zero_entry)
    assert rating == 1.0


def test_missing_keys_logged_and_defaults(missing_key_entry, caplog):
    with caplog.at_level("WARNING"):
        rating = compute_lives_rating(missing_key_entry)
    assert any("Missing key" in rec.message for rec in caplog.records)
    assert math.isfinite(rating)
    assert 1.0 <= rating <= 9.0


def test_non_numeric_values(non_numeric_entry):
    rating = compute_lives_rating(non_numeric_entry)
    assert math.isfinite(rating)
    assert 1.0 <= rating <= 9.0


def test_process_ratings_preserves_count(multi_product_data):
    processed = process_ratings(multi_product_data)
    # number of entries should remain unchanged
    assert len(processed["toys"]) == len(multi_product_data["toys"])
    for entry in processed["toys"]:
        assert "lives_rating" in entry
        r = entry["lives_rating"]
        assert isinstance(r, float)
        assert 1.0 <= r <= 9.0
