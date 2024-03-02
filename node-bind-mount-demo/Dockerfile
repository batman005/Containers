FROM node

WORKDIR  /developer/nodejs/node-bind-mound-project

COPY . .

RUN npm ci

ENV PORT 3000

CMD ["npm", "start"]


#docker run -it --init -p 3002:3000 -v "$(pwd)":/developer/nodejs/node-bind-mound-project app-bind-mount-node:latest --ye code live update karega container me it will bind the host to container
# it builds a two way pipeline i can edit file in container using vim