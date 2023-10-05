FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3333

RUN npx prisma generate

CMD [ "npm", "run", "start" ]
