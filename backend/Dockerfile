FROM node:22-alpine AS builder

LABEL author="Incridable Acuman"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./app/dist

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]