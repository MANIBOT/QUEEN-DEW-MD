const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'true' : process.env.ONLY_ME,
ADDRESSES: process.env.ADDRESSES === undefined ? '' : process.env.ADDRESSES,
ALIVE: process.env.ALIVE === undefined ? `Hello im alive now !!` : process.env.ALIVE,
OWNER: process.env.OWNER === undefined ? `9472` : process.env.OWNER,
PREFIX: process.env.PREFIX === undefined ? '@' : process.env.PREFIX,
FOOTER: process.env.FOOTER=== undefined ? '‌ss': process.env.FOOTER,
LOGO: process.env.LOGO === undefined ? `https://telegra.ph/file/0d35bb8b66366157272df.jpg` : process.env.LOGO
};
