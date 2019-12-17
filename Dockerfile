FROM node:12.13.1-alpine as build-stage
ENV HOME=/home/app
COPY package.json tsconfig.json $HOME/
WORKDIR $HOME
RUN yarn && yarn cache clean
COPY src $HOME/src
RUN yarn build

# ----

FROM node:12.13.1-alpine
ENV HOME=/home/app
COPY package.json $HOME/

WORKDIR $HOME
RUN yarn --production && yarn cache clean

COPY --from=build-stage /home/app/dist $HOME/dist

CMD [ "yarn", "production" ]
