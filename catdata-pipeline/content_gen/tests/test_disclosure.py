import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from unittest.mock import patch
import content_gen


class FakeResponse:
    def __init__(self, text):
        self.choices = [type("obj", (), {"message": {"content": text}})]


@patch("openai.ChatCompletion.create")
def test_generate_article_includes_disclosure(mock_create):
    mock_create.return_value = FakeResponse("Generated text")
    result = content_gen.generate_article("cats", {})
    assert result.startswith(content_gen.DISCLOSURE_LINE)
    assert result.rstrip().endswith(content_gen.DISCLOSURE_LINE)
