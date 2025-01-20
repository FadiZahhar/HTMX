FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy all files to the working directory
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application with nodemon
CMD ["sh", "-c", "npm install && nodemon index.js"]
