### STAGE 1:BUILD ###
# Defining a node image to be used & giving it an alias of "build"
# Which version of Node image to use depends on project dependencies 
# This is needed to build and compile our code while generating the docker image
FROM node:16-alpine AS build
# Create Env variable
ENV APP_PATH /ui-app
# Create a VIRTUAL DIRECTORY inside the docker image
WORKDIR $APP_PATH
# Copy files to VIRTUAL DIRECTORY
# Copying both package.json & package-lock.json
COPY package*.json ./
# Run command in VIRTUAL DIRECTORY
RUN npm cache clean --force
RUN npm install
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm run build --prod


### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest
# Create Env variable
ENV APP_PATH /ui-app
ENV DIST_PATH dist/ng-todo
# Copy our default nginx config
# RUN rm -rf /etc/nginx/conf.d/*
COPY ./dev/nginx.conf  /etc/nginx/conf.d/default.conf

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copying UI compiled code to default nginx index page location
# NOTE: This path may change according to your project's output folder 
COPY --from=build $APP_PATH/$DIST_PATH /usr/share/nginx/html/
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80