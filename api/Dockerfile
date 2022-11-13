FROM node:16.18.0-alpine

ARG PORT=3001
ARG APP_NAME=api

WORKDIR /usr/${APP_NAME}/app

COPY package* ./

RUN npm install

COPY . .

EXPOSE ${PORT}