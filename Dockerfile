FROM wechaty/wechaty:next

WORKDIR /bot

COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]
