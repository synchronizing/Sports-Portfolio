FROM node:8

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install -g @angular/cli

EXPOSE 80

CMD ng serve --host 0.0.0.0 --port 80
