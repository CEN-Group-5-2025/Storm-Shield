# Storm-Shield

## Getting Started

Before each section the taskfile command shown can be run instead of the terminal commands included in that section. If you have Taskfile installed, you can just run the taskfile command.

### Prerequisites

- Docker, Docker Compose: <https://docs.docker.com/desktop/>
- Python: <https://www.python.org/downloads/>
- VSCode: <https://code.visualstudio.com/download>

Optional:

- Taskfile for managing commands and local tasks: <https://taskfile.dev/installation/>
- Anaconda for managing Python virtual environments: <https://www.anaconda.com/download>

### Setup

> Taskfile command: `task setup`

Create new env file

```sh
cp sample.env .env
```

Setup Python virtual environment with venv:

```sh
python3 -m venv ./.venv
source ./.venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install -r requirements.dev.txt
```

If you are using vscode, there should now be a popup to select the python interpreter. Select the new .venv directory that was just created.

Alternatively, you can use Conda to manage python packages instead of venv. This is my preferred method, but it takes a little bit more setup. Once you have your conda environment selected, you would proceed with the same pip commands listed above.

### Running Dev Server

> Taskfile command: `task dev`

Build and start server

```sh
docker-compose build
docker-compose up
```

After first build, you can just run:

```sh
docker-compose up
```

### Unit tests

> Taskfile command: `task test`

To run unit tests using django's test suite:

```sh
docker-compose run --rm app sh -c "python manage.py test"
```

### Taskfile Commands

If you have Taskfile installed, you can use the following:

| Command                       | Purpose                                       |
| ----------------------------- | --------------------------------------------- |
| `task setup`                  | Runs basic setup for repo dev                 |
| `task dev`                    | Start dev server                              |
| `task network`                | Starts the server in "network" mode           |
| `task test`                   | Run unit tests                                |
| `task makemigrations`         | Create database migration files               |
| `task makemigrations:dry-run` | Run makemigrations but don't create files     |
| `task migrate`                | Apply migration files to the database         |
| `task lint`                   | Check code lint rules with Flake8             |
| `task format`                 | Check but don't apply formatting rules        |
| `task format:fix`             | Format codebase using Black                   |
| `task down`                   | Stops all running docker containers           |
| `task down:clean`             | Stops and removes containers, removes volumes |

### Admin Dashboard

You can log into the admin dashboard by going to the route `/admin` and using the following credentials:

- Username: `admin@example.com`
- Password: `changeme`

These defaults are set via environment variables:

```txt
DJANGO_SUPERUSER_EMAIL="admin@example.com"
DJANGO_SUPERUSER_PASS="changeme"
```

If you want to change these values, copy the sample.env file to a new `.env` file and change the values. If you already created an admin with the other credentials, then another one won't be created automatically. To get another one to be created automatically, remove the database and restart the app with this command:

```sh
docker-compose down --remove-orphans -v
docker-compose up
```

If you want to create a new admin without removing the old database, run this command:

```sh
docker-compose run --rm app sh -c "python manage.py createsuperuser --no-input"
```
