FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
RUN apk update && apk add bash 
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npx sequelize db:migrate
RUN npx sequelize db:seed:all

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]