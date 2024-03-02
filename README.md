Clean up the whole system and delete every image container etc:

docker system prune -a

Build a dockerfile and create and image 
(execute the below command either from the directory where dockerfile is present or replace . with path to docker file.

docker build -t <tag_name>.


Runsa Container from an image
```
docker run -it --init -p <hostpost>:<container_port> <image_name>

````
Bind mount project with docker container
```
docker run -it --init -p 3002:3000 -v "$(pwd)":/developer/nodejs/node-bind-mound-project app-bind-mount-node:latest
```
