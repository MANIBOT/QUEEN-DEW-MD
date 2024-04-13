const config = require('../config');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var needus = "*Please give me facebook url* !!" 
var cantf = "*I cant find this video* !!" 
cmd({
    pattern: "fb",
    alias: ["facebook"],
    react: '☘️',
    desc: "Download facebook videos.",
    category: "download",
    use: '.fb <facebook url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let response = await fetchJson('https://rossy-dl-api.vercel.app/api/downloads/facebook?url='+q)
await conn.sendMessage(from, { image: { url: data.thumb }, caption: dat }, { quoted: mek })
if(data.url[1]){
await conn.sendMessage(from, { video: { url: data.url[0].url }, caption: '*'+data.url[0].subname+' VIDEO*'}, { quoted: mek })
await conn.sendMessage(from, { video: { url: data.url[1].url }, caption: '*'+data.url[1].subname+' VIDEO*'}, { quoted: mek })
} else {
await conn.sendMessage(from, { video: { url: data.url[0].url }, caption: '*SD VIDEO*'}, { quoted: mek })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})
  
