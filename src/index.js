import {WechatyBuilder} from '@juzi/wechaty'
import {WechatyWebPanelPlugin} from 'wechaty-web-panel'
import {PuppetWhatsapp} from '@juzi/wechaty-puppet-whatsapp'

const name = 'whatsapp-assistant';
let bot = '';

const puppet = new PuppetWhatsapp()
bot = WechatyBuilder.build({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppet
});


bot.use(WechatyWebPanelPlugin({
    apiKey: '微秘书平台 apiKey', apiSecret: '微秘书平台 apiSecret',
}))
bot.start()
    .catch((e) => console.error(e));
