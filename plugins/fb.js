const config = require('../config');
const { cmd, commands } = require('../command')
const fbdl = require("fbdl-core");
const fs = require("fs");
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
await conn.sendMessage(from, { video: { url: response.result.video_hd }, caption: "QUEEN DEW MD\n\n*☘️ Quality SD*" }, { quoted: mek })
await conn.sendMessage(from, { video: { url: response.result.video_sd }, caption: "QUEEN DEW MD\n\n*☘️ Quality HD*" }, { quoted: mek })
} catch (e) {
reply(cantf)
console.log(e)
}
})
  
