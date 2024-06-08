# Node.js + React.js Sample App

This repository is a showcase of various technologies, architectonal principles and libraries.
It utilizes:

- [JavaScript](https://javascript.info/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nest.js](nestjs.com)
- [React.js](https://react.dev/)
- [Domain-driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design)
- [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))
- [Command and Query Responsibility Segregation (CQRS)](https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation)
- [Value Objects](https://en.wikipedia.org/wiki/Value_object)
- [Docker](https://www.docker.com/)
- [Task](https://taskfile.dev/)

## Requirements

- install Docker https://docs.docker.com/engine/install/
- install Task https://taskfile.dev/installation

## Start the project

- run `task up`

## Usage

### Web & API

- Frontend http://localhost:3000
- Backend http://localhost:3001
- Swagger API documentation http://localhost:3001/api
- Mongo Express http://localhost:8081

## TODO

- error handling (e.g. POST /jobs when a mongoose connection fails)
- asynchronous command and event processing
- correlation and causation ids
- event sourcing
- tests
- graphql (as an alterantive to REST API)
- websockets (for auto-updates after creating/updating/deleting a job)

## Resources

- https://www.domainlanguage.com/ddd/blue-book/
- https://docs.nestjs.com/
- https://dev.to/sairyss/domain-driven-hexagon-18g5