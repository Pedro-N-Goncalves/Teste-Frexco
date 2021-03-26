FROM node:14-alpine
EXPOSE 3000
RUN mkdir -p /app/public /app/src
WORKDIR /usr/app
COPY tsconfig.json /usr/app/tsconfig.json
COPY package.json /usr/app/package.json
COPY package-lock.json /usr/app/package-lock.json

RUN yarn install

CMD ["yarn", "start"]