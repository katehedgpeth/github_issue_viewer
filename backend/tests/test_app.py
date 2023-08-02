import json


# I ran out of time to add mocking for this test, so
# it is calling the actual Github API. Normally I
# would mock this.
def test_api(client):
    response = client.get("/api/v1/issues")
    data = json.loads(response.data)

    keys = data.keys()
    assert "total_count" in keys
    assert "items" in keys
    for item in data["items"]:
        assert item.get("title")
        assert item.get("user")
        assert item.get("created_at")
        assert item.get("html_url")
