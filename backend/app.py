from flask import Flask
from flask_cors import CORS, cross_origin

def create_app():
  app = Flask(__name__)

  @app.route("/api/v1/issues")
  @cross_origin()
  def get_issues():
    return {
      "message": "Hello world!"
    }

  return app

if __name__ == "__main__":
  app = create_app()
  app.run()