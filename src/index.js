import {WechatyBuilder, log } from '@juzi/wechaty'
import {WechatyWebPanelPlugin} from 'wechaty-web-panel'
import {PuppetWhatsapp} from '@juzi/wechaty-puppet-whatsapp'

const name = 'whatsapp-assistant';
let bot = '';
log.level('verbose')
const puppet = new PuppetWhatsapp()
bot = WechatyBuilder.build({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppet
});


bot.use(WechatyWebPanelPlugin({
    apiKey: '7cb82c5b0090977ee013e881ace9b5f2b827dfee', apiSecret: 'b575b3a21ff47464570c6d4dc93868ec8ad548b1',
}))
bot.start()
    .catch((e) => console.error(e));
