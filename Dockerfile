FROM node:8

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install -g @angular/cli
RUN npm install

EXPOSE 80

RUN node server/models/misc/CardsToMongo.js
CMD npm start
//CMD ng serve --host 0.0.0.0 --port 80
