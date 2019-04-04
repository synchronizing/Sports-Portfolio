FROM node:8

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install -g @angular/cli
RUN npm install

EXPOSE 80

CMD node server/models/misc/CardsToMongo.js
CMD npm start
