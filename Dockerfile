
# Use the official Node.js image as the base image:
FROM node18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm ci --only=production

# Expose a TCP port for the container
# Replace <PORT_NUMBER> with the actual port number your application listens on
# Exposing a specific port is necessary in order for the Docker container to be accessible from outside
EXPOSE <PORT_NUMBER>

# Define the entry point for the container
CMD ["npm", "start"]
