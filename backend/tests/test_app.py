def test_api(client):
  response = client.get("/api/v1/issues")
  assert response.data == b'{"message":"Hello world!"}\n'