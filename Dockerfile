FROM nginx:alpine

# Copy every file and folder from your repo into nginx’s webroot
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
