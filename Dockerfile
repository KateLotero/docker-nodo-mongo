FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install

#copiar el directorio actual dentro del contenedor actual
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]