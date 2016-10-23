FROM mhart/alpine-node:6.9.1
MAINTAINER Robert Djurasaj <robert.djurasaj@gmail.com>

COPY . /src
WORKDIR /src

CMD ["npm", "start"]