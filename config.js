const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " ",  //eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NpUmd1M2RTc0hLeEdoOXhORmNrbVFmTDgzcm5xOWlYUzJWUW1jemZVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ptRzJlSGM2YVNMdXZVaFBCeVluMjdrSUNQYjdjYUh6U2g1b3kxTVgxVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSWptOEFHdGtPSzJ5czg2VXEvdGFyb1lBejdxWlhYUTZDemx3MUtQR1ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLL3Z2b2VEbGVhME5BNEk0UkZ5R2pjbmlGR2lQRkxPQ2pQNE1qVnpDN2xvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNcXJMcEVYWkIzempva3hUdnR3OC9YQ08xYXlUK0ZOa2VEZ0wxOG5SR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl3bDhmSnllWSt5aTBYeUEvRlhPMXNFUEc3YTF6WEowSW5wVjI3THZXRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEt5V1JOd2hsU3BqQU1uMmlnbkE0em1FZ2RlN3RhQjgzSHB2TThEQitWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTitYWDBBaGYwNnRmWlE4MkJGK09YL3VnN0grTXFaZ3RoM3VEd3lLRGpuWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJyTUFoOGZEeStyQzd0VW05cnRnSDhYM0ZYc3Z0SlZpd282WFNkZlFEcFNZRHM0Qm1Kc0VTY3JxQzA4bjNkTkpKL0lQNXRhNVRiQkMzVE9NSXYwbUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6Ii84NEg3T3dzZWdQTEsyaXpOMGp1VFhhRmU5VVlpdWRyVzBKanNNcVkvZXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFiTXRwS3NmUWNtUXgyRWVQbC1BNVEiLCJwaG9uZUlkIjoiMzEyNWM2MDktOTg4ZS00MmRlLTk0MGMtYjBlYmMxMjM0MjdhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZIWWJFZ2ZMaDBjdHg2djMvb2taOXdINmFRcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjMG4xYWovQ0pyUkpyc2x4Z0ZIc2FrWlh4RXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUTVERkdDUjciLCJtZSI6eyJpZCI6IjUwOTQ3NDM0MDk5OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWNg+S6l+GthCBbIE3kuYjjg6Eg4oCifOKAoiBNSUtFWSBd4oKp4oKx8JKGnCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXIzcWNFR0VMT0U3cTRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNFI5YWc0UXBHbTFNYzNTRWxOWTkxSHlNdlpiMFdFektCOFg2NktZL01qMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibU9YYlZtUWdlRldhZWJRcTBoNVdnaGRPRmJrU21udTdEc0hUc21wSldnVSt2Mno2Q1pac01nSU9rRE1Ea3ZwYklZKzY3eDlBMmtQSXJaREtuR0ZaQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImZNN3BKYnFhVnJKQ1M2YzlyZDJKMStRSEYrRlNQc0R3ZFBudjRwdEZRT3Vac011aEpDQW5HbGFNOXNpbHdSZ2lkTXBTTzMycHplK0dubkFRYVBhN0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDc0MzQwOTk6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUVmV29PRUtScHRUSE4waEpUV1BkUjhqTDJXOUZoTXlnZkYrdWltUHpJOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwODg4NDUzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZ1EifQ==, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
