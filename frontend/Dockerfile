FROM node:14-alpine

EXPOSE 3000
WORKDIR /usr/app

COPY tsconfig.json ./
COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "start"]