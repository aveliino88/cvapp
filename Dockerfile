# Use the official Node.js base image with the specified version
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy all files to the working directory
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]