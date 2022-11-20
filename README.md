## Overview

This is a scaffolding project for NodeJs web application, written in typescript. It uses `express` as the core framework, use `tsoa` to generate routes based on decorators in the controllers, and models with types inferred from typescript.
The controller part is quite alike `SpringBoot` or `NestJs`, it's the single source of truth for the API.

## Environment

- node@16+
- yarn@1.x

## Tech Stack

- node@16+
- typeScript@4+
- express@4.18+
- pino@8.7+
- tsoa@4.1+
- swagger-ui-express@4.6+
- express-actuator@1.8+
- jest@29+
- supertest@6.3+

## Code of Conduct

### Folder Structure

- Put all the source code into `src` folder
- Put all the tests into `__tests__` folder, and name it with this pattern: `[fileName].test.ts`. The tests sit beside the source code.

### Naming

- folders: name with kebab-case, eg: api-spec
- ts file: name with kebab-case, eg: hello-controller

### Code Quality

- Eslint & Prettier
- Unit Test
- API Test

## Run App Locally

1. `yarn install`
2. `yarn generate-route-and-spec`
3. `yarn start`

## Endpoints

- swagger: http://localhost:3000/api/v1/swagger-ui
- info: http://localhost:3000/api/v1/actuator/info
- health: http://localhost:3000/api/v1/actuator/health

## Scripts

- `yarn start`: start server in local development environment
- `yarn test`: run tests
- `yarn build`: build app for production
- `yarn generate-route-and-spec`: generate route middleware and route spec of Open API 3.0
