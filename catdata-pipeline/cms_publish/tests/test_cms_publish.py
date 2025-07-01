import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from unittest.mock import patch
import cms_publish


class FakeResponse:
    def raise_for_status(self):
        pass


@patch("requests.post", return_value=FakeResponse())
def test_publish_page_injects_disclosure(mock_post):
    body = "Some article"
    cms_publish.publish_page("Title", body, image_url="img")
    sent_payload = mock_post.call_args[1]["json"]
    assert sent_payload["body"].startswith(cms_publish.DISCLOSURE_LINE)
    assert sent_payload["featured_image"] == "img"


@patch("requests.post", return_value=FakeResponse())
def test_publish_page_preserves_disclosure(mock_post):
    body = f"{cms_publish.DISCLOSURE_LINE}\n\nContent"
    cms_publish.publish_page("Title", body, image_url="img")
    sent = mock_post.call_args[1]["json"]["body"]
    assert sent.startswith(cms_publish.DISCLOSURE_LINE)
    assert sent.count(cms_publish.DISCLOSURE_LINE) == 1
