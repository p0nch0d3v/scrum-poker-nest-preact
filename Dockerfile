FROM node:20-slim

ARG MODE=""
ARG NODE_ENV=""
ARG SOCKET_SERVER=""
ARG POSTGRES_URI=""
ARG APP_PORT="80"
ARG CORS_ORIGIN="*"

ENV MODE=${MODE}
ENV NODE_ENV=${NODE_ENV}
ENV SOCKET_SERVER=${SOCKET_SERVER}
ENV APP_PORT=${APP_PORT}
ENV POSTGRES_URI=${POSTGRES_URI}
ENV CORS_ORIGIN=${CORS_ORIGIN}

EXPOSE 80
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --global typescript@5.2.2 @nestjs/cli turbo@1.12.4 vite@5.1.0
RUN npm install --legacy-peer-deps
RUN npm run build

CMD ["bash", "docker_entry_point.sh"]
