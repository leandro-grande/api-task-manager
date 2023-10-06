FROM node:18-alpine

RUN npm install -g npm@latest --loglevel=error

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3333

RUN npx prisma generate

CMD [ "npm", "run", "start" ]
