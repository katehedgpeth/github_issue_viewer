default_environ := 'dev'

start_all:
  @echo "starting backend server..."

install_backend:
  @echo "installing backend deps..."
  cd ./backend && python -m pip install -r requirements.txt

install_frontend:
  @echo "installing frontend deps..."
  cd ./frontend && npm install

install_husky:
  @echo "installing commit linters..."
  npm install

install_deps: install_backend install_frontend install_husky

install_pip package:
  cd ./backend && python -m pip install {{package}}
  cd ./backend && python -m pip freeze > requirements.txt


start_frontend environ=default_environ:
  cd ./frontend && npm run {{environ}}

start_backend:
  cd ./backend && flask run

lint_backend:
  cd ./backend && pylint --load-plugins pylint_quotes .settings

test_backend:
  cd ./backend && python -m pytest .

test_frontend:
  cd ./frontend && npm run test

test: test_frontend test_backend