FROM node:8.11.4-alpine
ENV PORT 3000
ENV REACT_APP_API_URL http://192.168.1.82:4000/api/
LABEL author="César Delgado" maintainer="cesar.delgado.arcos@gmail.com"

COPY ./ .
RUN npm i npm@latest -g
RUN npm install

CMD ["npm", "start"]