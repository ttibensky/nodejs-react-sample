# Node.js + React.js Sample App

This repository is a showcase of various technologies, architectonal principles and libraries.
It utilizes:

- languages:
  - [JavaScript](https://javascript.info/)
  - [TypeScript](https://www.typescriptlang.org/)
- frameworks
  - [Nest.js](nestjs.com)
  - [React.js](https://react.dev/)
  - [Vite](https://vitejs.dev/) for fast build, project startup and updates
- principles:
  - [Domain-driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design)
  - [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))
  - [Command and Query Responsibility Segregation (CQRS)](https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation)
  - [Value Objects](https://en.wikipedia.org/wiki/Value_object)
- libraries:
  - `@nestjs/mongoose` and `mongoose` as an ODM for storing and retrieving data
  - `@nestjs/swagger` to generate API documentation from the code
  - `class-validator` to validate requests/user inputs before the data goes to the controllers
  - `date-fns` to make work with dates easier
  - `purify-ts` to provide a funcional (and more readable) way of handling and avoiding null values and nested conditions
  - `uuid` to generate IDs and primary keys for entities, commands, events and queries
  - `Bootstrap` and `React Bootstrap` UI kit, so we don't have to write our own components
- command line utilities:
  - [Docker](https://www.docker.com/) for stable environment
  - [Task](https://taskfile.dev/) for easier command line usage

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
- add [React Query](https://tanstack.com/query/v3) for better state management (refresh job board list after create/update/delete)

## Resources

- https://www.domainlanguage.com/ddd/blue-book/
- https://docs.nestjs.com/
- https://dev.to/sairyss/domain-driven-hexagon-18g5