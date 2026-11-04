FROM node:24-slim
WORKDIR /opt/app/
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build:prod && npm prune --omit=dev
EXPOSE 8080
CMD ["npm", "run", "serve"]
