const { cmd } = require('../command')


var os = require('os')
    var start = new Date().getTime();
var end = new Date ().getTime();
const ping = (end - start)

if (os.hostname().length == 12) {
  hostname = 'Replit'
} else {
  if (os.hostname().length == 36) {
    hostname = 'Heroku'
} else {
    if (os.hostname().length == 8) {
      hostname = 'Koyeb'
} else {
        if(os.hostname().includes('codespace'){
    hostname = 'Codespace'
        }else{
      hostname = os.hostname()
        }
}}}

const ram = ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
const rtime = await runtime(process.uptime())

const txt = `${mg.systemhead}

────────────────────
|▫️ Platform : ${hostname}       
|▫️ Uptime : ${rtime}                 
|▫️ Ram : ${ram}                        
|▫️ Mode : ${mg.mode}                       
────────────────────`
await conn.sendMsg(m.chat, { text:txt }, { quoted: mek })
} catch (e) {
reply('Error !!')
l(e)
}
