# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app for production to the build folder
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build", "-l", "5000"]

# Inform Docker that the container listens on the specified network port at runtime.
EXPOSE 5000
