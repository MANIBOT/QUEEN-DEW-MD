const { cmd } = require('../command')
const googleTTS = require("google-tts-api");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')



cmd({
            pattern: "tts",
            desc: "m to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
            if (!m) return mek.reply('Please give me Sentence to change into audio.')
            let mtts = m
            const ttsurl = googleTTS.getAudioUrl(mtts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return conn.sendMessage(mek.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsmekconn.m4a`,
            }, {
                quoted: mek,
            });
        }

    } catch (e) {
reply('*Error !!*')
l(e)
}
})

