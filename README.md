# Github Issue Viewer

A simple UI and backend to display issues from a github repo.

## Local Installation

prerequisites: pyenv with Python 3.11.1 installed

1. Create a virtualenv called `github_issue_viewer`: `pyenv virtualenv 3.11.1 github_issue_viewer`. Once this has been created, the `.python-version` file in this repo should cause pyenv to auto-activate this virtualenv whenever you cd into this folder.
2. Install Just with homebrew, to enable running Just scripts: `brew install just`
3. Install all dependencies: `just install`
4. Start the backend: `just start_backend`
5. Start the frontend: `just start_frontend`
6. Visit `http://localhost:5176` to view!
