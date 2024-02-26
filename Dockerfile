FROM node:20.11.1-alpine3.19 as build
WORKDIR /api
COPY package.json .
RUN npm install
COPY . .
ARG API_NAME
ENV API_NAME=$API_NAME
RUN npm run build
CMD [ "npm", "run", "start:prod" ]
