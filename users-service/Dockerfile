FROM node:20

WORKDIR /app/users-service

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]