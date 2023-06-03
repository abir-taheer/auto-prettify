FROM library/node:18-alpine
RUN apk update && apk upgrade && apk add --no-cache python3 g++ make git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ /usr/src/app

ARG BUILD_DATABASE_URL
ENV DATABASE_URL=$BUILD_DATABASE_URL

RUN npm install
RUN npm install -g prisma
RUN npm build

ENV PORT 80
ENV NODE_ENV production
EXPOSE 80
CMD [ "npm", "start" ]