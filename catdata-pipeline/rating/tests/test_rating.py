import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "rating"))

import json
import pytest
from rating import compute_lives_rating, process_ratings


@pytest.fixture
def sample_data():
    return {"food": [{"durability": 4, "safety": 5, "value": 3, "convenience": 2}]}


def test_compute_lives_rating():
    entry = {"durability": 5, "safety": 4, "value": 4, "convenience": 3}
    rating = compute_lives_rating(entry)
    assert 1 <= rating <= 9
    assert round(rating, 2) == round(
        (5 * 0.3 + 4 * 0.25 + 4 * 0.25 + 3 * 0.2) / 5 * 8 + 1, 2
    )


def test_process_ratings(sample_data):
    result = process_ratings(sample_data)
    assert "lives_rating" in result["food"][0]
