const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347063087814";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_12_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMixcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDMzLFxuICAgICAgICAzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSnZNOFQ3OVplaXF1L0ZPRmswVzhIdU03c0lCb05raEtTMWxpSlB3VXp3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjMwODc4MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBGRjY4REU2NDJBNDJEOERCNUIzMUQxMDhBOTFBMUYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE4Njc3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNNmNJaG04WVE0Q1BQTUZDRXlzRmR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3MDAzNmRhLWRlNzMtNGViOC1iMTFhLWEwZjgyNWI5NjNlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDIwNyxcbiAgICAgIDY3LFxuICAgICAgMTQ0LFxuICAgICAgMjIyLFxuICAgICAgMzEsXG4gICAgICA2OCxcbiAgICAgIDM4LFxuICAgICAgMTk1LFxuICAgICAgMTA1LFxuICAgICAgMTI0LFxuICAgICAgMTI4LFxuICAgICAgOTAsXG4gICAgICAxNTAsXG4gICAgICAxMzksXG4gICAgICAxMTQsXG4gICAgICAxNzIsXG4gICAgICA4NSxcbiAgICAgIDIxOCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDE2MCxcbiAgICAgIDE5OSxcbiAgICAgIDE1NixcbiAgICAgIDIxNSxcbiAgICAgIDE0LFxuICAgICAgMjA2LFxuICAgICAgMjEsXG4gICAgICAxMjEsXG4gICAgICAyMzEsXG4gICAgICA4OSxcbiAgICAgIDYxLFxuICAgICAgMjI2LFxuICAgICAgMTIwLFxuICAgICAgMzMsXG4gICAgICAxNDEsXG4gICAgICAxNzgsXG4gICAgICAxNjgsXG4gICAgICAyNDMsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2WVJIQ1czNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MzA4NzgxNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2hpenpsZVwiLFxuICAgIFwibGlkXCI6IFwiMjM2MDA4NTIwMDY5MTQ5OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTMyaCtvREVJNzRtYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMbE9WWUxRR1hsc1dyOWlhckQ0RjZhREZmRlRXZ0VpMlJxbVZ1RUJ3ZVFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRYMWJpMnJKWjFrbmd5YjYzZkhvUHg1MXlSUkFoRFE4cWZsK1kwZEwrRTE3ZENZMWc3NC9rZGg4aUl6V0JBZ20wK29WcERWNDRDVDFiZU0xOTBzZ0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjc5ZndMNy9rc0NvdDJudW40cHVvSU9KdFhscXFoMG1FbzBNc29jY01qK0d1eG5WMHk1bS95L2xvemVSZzhQQThpVC9majBkcWhkQTBDa3NmZlpVZ2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjMwODc4MTQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODY3NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPUGtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Qay5qc29uIjogIntcImtleURhdGFcIjpcImdIbEVWMlg0QXd6RHhqVktlaHQ3NFM5RC8xSDFsNE1xMldteE9jZkFMSlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzczNDM0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTg2NzcxNzE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
