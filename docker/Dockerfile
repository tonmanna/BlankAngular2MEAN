FROM node:6
ENV INSTALL_PATH /project
RUN mkdir $INSTALL_PATH
COPY package.json $INSTALL_PATH
WORKDIR $INSTALL_PATH
VOLUME /project/node_modules
RUN npm install typescript@next -g
RUN npm install karma-cli -g
RUN npm install webpack -g
RUN npm install typings -g
RUN npm install nodemon -g
RUN npm install
RUN typings install