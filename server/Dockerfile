FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app /app

EXPOSE 8080
CMD [ "node","index.js" ]