FROM node:8

# Create app directory
RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are
# copied where available (npm@5+)
# (Caching node_modules) By adding the app's package.json and running npm install before
# copying in the app's source files, npm install doesn't need to be run after every build.
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

# Env variables for the application
ENV PORT=5001
ENV HOST=0.0.0.0

EXPOSE 5001

CMD ["npm", "run", "release"]
