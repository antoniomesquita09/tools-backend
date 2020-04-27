FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app

RUN yarn

COPY . /usr/app

EXPOSE 4000

CMD yarn dev