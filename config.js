//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348138948744";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dqcGkzeHQyOG5YYXNORVkzbWNXVitHaVlQR2VDR01aNG9BYkI0QnZGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm1lSERCTGFYb0dmOGRJM2lrTzJyb2ZiUUp3a2ZnSGpHUmhVQmxOd2ZDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQzdkNS9keVFMT3dLUWNtcmRCZWZZRWdOYzRkSUZJUnJVQjVra2phSm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcXFkeFFpVVBkV0NqdnJvWnE5ME9rTTMwSWs0dnp1UlVqb3lvcVNPaG1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlIOE90MDQ0Q2JIMmpUbkU1YTlJSVJCYUhEMjcrdVE2cHBRK1owNzZNRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpDOU9iSm9XMWFtQnhubFJ6Sm0wQU05b2dwNmJCRFUzZnowN0JyTUw4d2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBYT3FsZ1ROTUFGeVhVYi9RclpQRCtVNnlRVEhEcFg4ZkpRc05oNTgyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09wS1VkeXVIQThtdlNmZWt4TjlKU29MN003c05FTHJzekFqdmk0dnlXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZYcEc3cE9ZSFFkQ0FPa2Q1N2wzT3c0a1BxUGw2enVRUEpNZ3lqWnpiRFFrUGltRHZUOEgxbTF3NWN6ejFJNXdUQ05lb3d2SC96MG1MckgxLzdNRUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6InI3blB6V1QvbUtyaGh4cFRkK1JvR0lJTDNDbENlbjZlNUpQWGpzQXNFM1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEzODk0ODc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NjdGRDBGRUQxOERDNjZDNzA4RjczRDk3QzUzNjMwMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NDE5ODMzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTM4OTQ4NzQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdBMzE4NUMyQUQyNjU4NjRDRjYxMjFENTI3OTgyNDczIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc0MTk4NTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzg5NDg3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDRBQUE4NDBEOUEzNzhDRUVCQUE2OURDMTYyOEIzMTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzQxOTg5M31dLCJuZXh0UHJlS2V5SWQiOjMyLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzIsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY1pPblI1ZlNReUtiZGY4YnFMZlM2QSIsInBob25lSWQiOiI3MzhlMThjZi0wYWYwLTRlN2MtYjQ3Ni1lYTM4ODg4YThkMWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG90dDNQMmVqdHNvcTh2MDVaRnRKMThGTitZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVybkdTWFRQdlNxT1ZkUmZzMkdkYTEza0hXVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBV0NEM0FRNSIsIm1lIjp7ImlkIjoiMjM0ODEzODk0ODc0NDo0NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1RkblhFUXBhdlp0d1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicWFZdmhpMzFUOFZhbFFxMmdiTlVkckR6Vk14Wk5KUkE2TWNXazhUblkyYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibG43cWNhdVZVaXA0Um5sOUlOMkFmMkZSdVNIZlQ4YVlGVnFBK0xjcHFoWDNFWVFVT2ZjQ29yTEdzUWR0Q05pYUVoVkViVmhJT1RmODlTakZzS2lVQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkhzSjVWSUdaak01ZFl1VEl6dHRXb0tWbjloYlBwM2sxZjg4MCtWSHVsRGVwTWZWMjVRQkRKYjhqZ2xNMytVenVuU21CUWw3ZHJxZE4zT0NyRjh4R0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzODk0ODc0NDo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbW1MNFl0OVUvRldwVUt0b0d6VkhhdzgxVE1XVFNVUU9qSEZwUEU1Mk5uIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NDIwMDE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQ3NBQUpPaSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
