FROM node:lts-alpine

WORKDIR /usr/app/churras

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]