FROM node:14.19.1-alpine3.15

WORKDIR ./app

COPY --chown=node:node . .

CMD ["node", "./index.js"]