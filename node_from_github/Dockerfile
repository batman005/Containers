FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/batman005/Dockerize-Node-project.git .

ENV PORT=3000

#EXPOSE 3000

RUN npm ci

CMD ["npm","start"]

#docker build -t app-from-github-with-env .     
#docker run -it --init --publish 3001:3000 app-from-github-with-env:latest 
#docker run -it --init --publish 3001:3000 app-from-github-with-env:latest bash  --to access the container directly with bash
#docker run -it --init -p 3001:3000 app-from-github-with-env:latest bash
#docker run -it --init -P app-from-github-with-env:latest <- when before hand expose the port use this it will randomly expose the port in host machine(mere machine maane) and container to 3000 me apna chal raha hoga