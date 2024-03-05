FROM wechaty/wechaty:next

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get update && apt-get install -y --no-install-recommends nodejs \
    && apt-get purge --auto-remove \
    && rm -rf /tmp/* /var/lib/apt/lists/*

WORKDIR /bot

COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]
