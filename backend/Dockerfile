#Build up on the node image (image found in Dockerhub)
FROM node:16

#Where should all following commands be executed inside of the Docker filesystem?
WORKDIR /backend

#1. Specify: Which files should be included in the image (code files etc.)
#2: Specify: Where to store these files in Dockers filesystem
COPY package*.json ./

#Install all dependencies of our node application
RUN apt-get update
RUN npm install
RUN npm install sequelize-cli
RUN npm install --save sequelize
RUN npm install --save swagger-jsdoc swagger-ui-express

#This is specifically for deploying all the source code to production. This line is
#100% necessary if the application will be deployed to a production server.
COPY . ./

#server.js listens to port 8000. Because a docker container is isolated from our local environment, 
#the result is that it has its own internal network.
#We can add the EXPOSE instruction to let Docker know that when the container is started, 
#we want to expose a certain port to our local system 
EXPOSE $PORT

#This command will not execute when an image is created but when a container is created for that image
#To start our server (run our container based on the created image) we have to run:
# CMD ["npm", "run", "dev"] 
ENTRYPOINT npm run dev
