BACKEND_SERVICE=backend
DB_SERVICE=db
COMPOSE:=

ifeq (, $(shell command -v docker-compose))
	COMPOSE += docker compose
else
	COMPOSE += docker-compose
endif

up:
		$(COMPOSE) up --build

upd:
		$(COMPOSE) up --build -d

down:
		$(COMPOSE) down

downv:
		$(COMPOSE) down -v

re: dev-down dev

ve: dev-down dev

logs:
		$(COMPOSE) logs -f

ps:
		$(COMPOSE) ps

backend:
		$(COMPOSE) exec -it ${BACKEND_SERVICE} bash

db:
		$(COMPOSE) exec -it ${DB_SERVICE} bash
