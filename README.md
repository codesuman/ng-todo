# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Docker Commands


## Docker Build

docker build tag <image_name> <docker_file_path>

```sh
docker build -t ng-todo:v1.0.0 .
```

## Docker Run

docker run daemon mode(Run container in background and print container ID) --name (container name) image_name

```sh
docker run -d --name todoui -p 80:80 ng-todo:v1.0.0
```

## Execute commands in Docker Container

In order to execute commands on running containers, you have to execute “docker exec” and specify the container name (or ID) as well as the command to be executed on this container. [Read more](https://devconnected.com/docker-exec-command-with-examples/)

```sh
docker exec -it todoui sh
```

## Docker Remove

Command to stop & remove running container

```sh
docker ps
```

```sh
docker stop <container_id>
```

Command to force stop & remove running container

```sh
docker rm -f todoui
```

# Cypress Integration

https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress#Getting-Started

### Follow below steps to add Cypress to Angular project
- ng add @cypress/schematic : https://www.npmjs.com/package/@cypress/schematic
- Configure Cypress with baseUrl & other settings : cypress.config.ts
- Add basic test cases : spec.cy.ts

# Simple Node Server

Create a file app.js

```sh
const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/todos', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-15-2020')
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,
      isFavorite: false,
      date: new Date('5-15-2020')
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: false,
      isFavorite: false,
      date: new Date('6-15-2020')
    }
  ]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Command to bring up Node server

```sh
node app.js
```