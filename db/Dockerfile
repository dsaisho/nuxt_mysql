FROM mysql:5

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE users
ENV MYSQL_USER users_service
ENV MYSQL_PASSWORD 123

# any .sql or .sh file added to the image’s /docker-entrypoint-initdb.d folder will be executed when setting up the DB.
ADD setup.sql /docker-entrypoint-initdb.d