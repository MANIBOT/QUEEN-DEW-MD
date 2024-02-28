const { cmd } = require('../command')

async function Insta(match) {
    const result = []
                    const form = {
                        url: match,
                        submit: '',
                    }
                    const { data } = await axios(`https://downloadgram.org/`, {
                        method: 'POST',
                        data: form
                    })
                    const $ = cheerio.load(data)
                    $('#downloadhere > a').each(function (a,b) {
                    const url = $(b).attr('href')
                    if (url) result.push(url)
                })
                return result
    }

cmd({
        pattern: "insta",
        desc: "send instragram url🕊️.",
        category: "downloader",
        filename: __filename
    },
    async(conn, mek, m,{from, q}) => {
if(!q) return m.reply('Send Instragram link💦.')
let response = await Insta(q)
for (let i=0;i<response.length;i++) {
await conn.sendFileUrl(from, response[i], `*Downloaded Media from instagram.*`, mek)
}
    });
