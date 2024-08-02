//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "syssolutions.reload@gmail.com";
global.location = "Peru, Lima";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Lima";
global.github = process.env.GITHUB || "https://github.com/OwnerCO/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "51978194933";
global.owner = process.env.OWNER_NUMBER || "51978194933";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU12SHVwMWdhTjJMWVJKcDVNbWI4SHYzeDNBMWxnUll4WVRZUUhBQVhGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWldmTGhrWlJJWjZYK21SU2hzNlpsR2RzYVhQRE5ja1o3MVRKbkVaVUx5WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS3NGM3R5NkxzRnBkekd4dmNrVThjamFHdXZ2aGRCcmNtSFcvSkdwRm13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2bkJGRXo5MzQ2Y3RIQ3NSS0lVQ1l1VUlsZjhHR0huZUNQZ0x1aStFQ2xFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIVDF4VWlGVFdaZC90NGVONTY0NjFKYnhWQklnM3I2UElhdzJab3NzRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAveFBKOEEvaElpY1NPWitOYVM3VlZBTnUvb1czSjY3Y0dxRi9mbjN6U0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFA0STlBcytIbzdEb3h2NzQyaEtiQkxOSmgvY3pyMWd6bko2MjhQelgybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVY2OGxUZTNZKzBXY1IxY3F5Rm55ZGUvK0ZHVEFITU1QYXZPQUd2M3h4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhZRjZGcERrNWJoN1B0T3IxVUh5V1RveWdUSmFBOGNyR1BHYXZ1ckZpcVhtU3Qxdi81UyswRkpwcWNRUlRGTUNyejhTS010NGdUaWdqYW9kOHJ0U2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJVdjNoNXN1L3pzSTlQVGVIRHhQSHFWRjJPWXFrTHBFVW9YaWZGZG9lVys4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5QzlGM0Q0RTY3RDg1NEVCMzJEODVGQkZEQTlEQkMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2MjcxMTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEyMDUyRUQ2RkVGQzc0MzU2RkE4RjRBREI0NURBQjJBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2MjcxMTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRzT01OSjJ3UXlDSWZXRFF2VDlKM0EiLCJwaG9uZUlkIjoiNWJlMzk4NGMtODAxNC00OWQ5LWFhMDQtMTAzZGU2NzM2M2I4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAxWmMrNnZEdjlCMVlsODNhZnRJREZ5TkpQMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1YnJ3cXdvYk8rWUxMTHF2bXpucGZNcGNNRzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEJZWUVRWDgiLCJtZSI6eyJpZCI6IjUxOTc4MTk0OTMzOjcxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCY8J2QkvCdlYrwnZWg8J2VnfCdlabwnZWl8J2VmvCdlaDwnZWf8J2VpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTW1RbHZVR0VKM290TFVHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiejRuUVJmTEZiSFpRanNWU0FhVG5FejJ6RDFuWis4OStEY3dPTzVwTzVSZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlBGajBNR2kwVWJjMzVjYXk4T1dmQ21PU25RVVo5RVBHM0VVV21hQ2pGTUVYb3BtUEY0czhSdWY4LzNCSWkrYjh1SGtnTkRKS3BkdjVWTmZ1U2ROREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZJUDVxNzk4dGxjZC8rVWpiRzVQZzhGcHVPaGk0UjJWT0g2YjhyVzdSaXJYcm53TWdyRHB2VTFybThZQW9FaTBoc1ZwVncwMWhnek9oNW5yU2wvZ2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTE5NzgxOTQ5MzM6NzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYytKMEVYeXhXeDJVSTdGVWdHazV4TTlzdzlaMmZ2UGZnM01EanVhVHVVWSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYyNzExNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQYSsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  author: process.env.PACK_AUTHER || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  packname: process.env.PACK_NAME || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  botname: process.env.BOT_NAME || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  ownername: process.env.OWNER_NAME || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
