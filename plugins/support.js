const { cmd } = require('../command')


cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{
    async(mek, m, q) => {
        m.reply(`*Check your Pm ${tlang().greet}*`);
        await mek.sendMessage(`${m.sender}`, {
            image: log0,
            caption: `*Group Name: Queendewmd-Support*\n*Group Link:* https://chat.whatsapp.com/F4yX2YfAF14GzF3xwey848`,
        });

    }

  } catch (e) {
reply('*Error !!*')
l(e)
}
})
