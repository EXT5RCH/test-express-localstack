FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm", "run", "dev"]