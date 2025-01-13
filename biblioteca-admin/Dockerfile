FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV PORT=3001

EXPOSE ${PORT}

CMD ["npm", "start"]