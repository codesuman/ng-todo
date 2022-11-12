# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


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