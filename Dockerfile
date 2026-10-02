FROM node:24-bookworm-slim

ENV NODE_ENV production

WORKDIR /backend_app

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node . /

USER node 


ENV PORT=4000

EXPOSE 4000

CMD ["node", "src/index.js"]