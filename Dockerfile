# Stage 1: Build the React Application
FROM node:20-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (using ci for strict version matching based on package-lock.json)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite application for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the first stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
