FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start"]