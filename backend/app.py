import requests
import os
from flask import Flask
from flask_cors import cross_origin

ENDPOINT = "https://api.github.com/search/issues"


def create_app():
    app = Flask(__name__)

    @app.route("/api/v1/issues")
    @cross_origin()
    def get_issues():
        full_url = f"{ENDPOINT}?{build_params()}"
        print(full_url)
        response = requests.get(full_url, headers=build_req_headers(), timeout=10)
        return response.json()

    # repo and state could be read from query params in the request from the frontend
    def build_params(repo="microsoft/playwright", state="open"):
        return "&".join(
            [
                f"q={build_query(repo, state)}",
                "page=1",
                "per_page=30",
            ]
        )

    def build_query(repo, state):
        return "+".join(["type:issue", f"repo:{repo}", f"state:{state}"])

    def build_req_headers():
        # unauthorized requests are limited to 60 requests per hour. To increase
        # the rate limit to 1000/hr, create a Personal Access Token in Github and
        # assign it to a GITHUB_PAT_PRESENCE_TAKEHOME environment variable.
        PAT = os.environ.get("GITHUB_PAT_PRESENCE_TAKEHOME")

        if PAT is None:
            return {}

        return {"Authorization": f"token {PAT}"}

    return app


if __name__ == "__main__":
    runner = create_app()
    runner.run()
