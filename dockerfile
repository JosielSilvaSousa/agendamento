FROM node:latest

WORKDIR /user/src/api

COPY . .
COPY ./.env.production ./.env
COPY ./package.json package-lock.json /

RUN npm install --quiet --no-optional --no-fund --loglevel-error

RUN npm run build

EXPOSE 3000:3000

CMD ["npm","run","start:prod"]


