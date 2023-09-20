BACKEND_SERVICE=backend
DB_SERVICE=db

up:
		docker compose up --build

upd:
		docker compose up --build -d

down:
		docker compose down -v

downv:
		docker compose down -v

re: dev-down dev

ve: dev-down dev

logs:
		docker compose logs -f

ps:
		docker compose ps

backend:
		docker compose exec -it ${BACKEND_SERVICE} bash

db:
		docker compose exec -it ${DB_SERVICE} bash
