# nodejs-microservices

This project was bootstrapped with ***Node.js*** and ***express.js***, which can be built and deployed via Docker container.

- **Dockerfile**: the script of Docker to build an image and run an instance for this project. In this file, we will customize steps that help dockerize the whole *Node.js* application into an image, including necessary configuration (e.g. environment variables) for the application. Later on start any number of this *Node.js* application based on the dockerized image.

- **package.json**: the script is core to the *Node.js* ecosystem, which helps 1) list the packages that the project depends on. 2) allow you to specify the versions of a package that the project can use using semantic versioning rules. 3) make your build reproducible, and therefore much easier to share with other developers.



### Simple steps to set up a Docker instance:
- Build a Docker image:

  `docker build -t <image name> . `

  *if you don't provide a tag name, Docker will automatically assign a random name for the image*

- Create a Docker container and run the instance based on a specific image:

  `docker run -d -p <host's port where Docker locates>:5001 --name <container's name> <image name>`

  *`-d` is to make the created container run in background;
  `-p` is to publish the container's port to the host*
