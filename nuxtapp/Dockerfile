
# Use Node v17.5.0 as the base image.
FROM node:17.5.0

# Set the working directory in the container
WORKDIR /app

# Copy all files from current directory to our image
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose our server port.
EXPOSE 3000

# Run our app.
CMD ["npm", "run", "start"]

#BUILD WITH::: docker build -t nuxtapp .
#RUN WITH::: docker run -p 3000:3000 -it nuxtapp