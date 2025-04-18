FROM nginx:alpine

COPY *.html /usr/share/nginx/html/
COPY css/      /usr/share/nginx/html/css/
COPY img/      /usr/share/nginx/html/img/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
