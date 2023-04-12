FROM node
WORKDIR /node_server
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]