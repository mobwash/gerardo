# syntax=docker/dockerfile:1

FROM node:18-alpine

COPY . .
RUN npm install --production
CMD ["node", "src/index.js"]

EXPOSE 3000