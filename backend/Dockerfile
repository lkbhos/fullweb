FROM node:21-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
EXPOSE 8081
CMD ["node", "index.js"]
