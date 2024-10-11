FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --quiet --no-optional --no-fund --loglevel=error

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]