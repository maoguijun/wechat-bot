const { message }  =require('./js/message')
const {Wechaty, Room, Contact} = require('wechaty')
const axios = require("axios")



const bot = Wechaty.instance({profile: '18501660323'}) //‘Promise’为微信名， 避免每次启动程序重新扫码
bot
.on('scan', (url, code)=>{
    console.log(url)
    let loginUrl = url.replace('qrcode', 'l')
    require('qrcode-terminal').generate(loginUrl)
})
.on('login', user=>{
  console.log(JSON.stringify(user))
    console.log(`${user} login`)
})
.on('friend', async (contact, request) => {
    console.log(contact)
})
.on('message', async m => message(m))
.on('error', e => {
  console.log(e.message)
})
.start()