# We pull the node image with alpine
FROM mhart/alpine-node:latest

# npm init -> package.json
# package.json will have diff libs
ADD package.json /tmp/package.json

# Go into /tmp
# Because we already have /tmp/package.json
# npm install will install all libs
RUN cd /tmp && npm install

# Build another working dir called /opt/app
# We copy /tmp/node_modules to /opt/app
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# We define the working dir
WORKDIR /opt/app

# We copy whatever source file in your local machine to container's /opt/app
ADD . /opt/app

# Expose port 3000
EXPOSE 3000

# npm start in package.json
CMD ["npm", "start"]
