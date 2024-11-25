FROM node:14

WORKDIR /app
COPY . /app

# Install outdated and insecure versions of dependencies
RUN npm install express@4.17.1 body-parser@1.19.0

EXPOSE 3000
CMD ["node", "index.js"]
