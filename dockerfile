# Stage 1: Build the React app
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (the default port for HTTP traffic)
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]