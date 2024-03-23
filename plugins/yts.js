const { cmd } = require('../command')

const ytdl = require('ytdl-secktor')
cmd({
        pattern: "yts",
        desc: "Gives descriptive info of query from youtube..",
        category: "downloader",
        filename: __filename,
        use: '<yt search q>',
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{

    async(mek, m, q) => {
        let yts = require("secktor-pack");
        if (!q) return m.reply(`Example : ${prefix}yts ${tlang().title} WhatsApp Bot`);
        let search = await yts(q);
        let qt = "*YouTube Search*\n\n Result From " + q + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            qt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\n🙈Views : ${i.views}\n⌛Duration : ${
      i.timestamp
    }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
        }
        return mek.sendMessage(m.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: qt,
        }, {
            quoted: m,
        });
    }

  } catch (e) {
reply('*Error !!*')
l(e)
}
})
