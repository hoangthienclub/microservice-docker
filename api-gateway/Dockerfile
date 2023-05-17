FROM node:16

WORKDIR /usr/src/api-gateway

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "start"]