# Use Node.js base image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application using Vite
RUN npm run build

# Use a lightweight nginx image to serve the build output
FROM nginx:alpine

# Copy the production build from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]