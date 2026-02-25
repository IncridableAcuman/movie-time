FROM node:22-alpine AS builder

LABEL author="Incridable Acuman"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
