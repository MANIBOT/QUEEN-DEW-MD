const config = require('../config')
const fg = require('api-dylux');
const l = console.log
const { cmd, commands } = require('../command')  
const ytdl = require('youtubedl-core');
const fs = require('fs-extra')

pattern: ".down",
    alias: ["ytsearch"],
    use: '.down lelena',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


youtubedl.download('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(info => {
    console.log('Download complete');
  })
  .catch(err => {
    console.error(err);
  });
