FROM node:carbon
WORKDIR /usr/src/app

RUN git clone https://github.com/eagle7410/node_experiments_pm2 /srv/app
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "pm" ]
