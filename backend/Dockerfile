FROM node:14-alpine

EXPOSE 4000
WORKDIR /usr/app

COPY tsconfig.json ./
COPY package.json yarn.lock ./
COPY package-lock.json ./

RUN yarn

COPY . .

CMD ["yarn", "start"]