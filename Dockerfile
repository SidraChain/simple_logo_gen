# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the index.html file from your local directory to the container
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx and ensure it stays running
CMD ["nginx", "-g", "daemon off;"]
