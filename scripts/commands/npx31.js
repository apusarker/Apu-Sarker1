const fs = require("fs");
module.exports = {
  config:{
	name: "npx31",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🎵")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "জান মন খারাপ করো আমি সব সময় তোমাকে ভালোবাসি-🤗 - 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 𝐀𝐍𝐃 𝐕𝐎𝐈𝐂𝐄 𝐎𝐅 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 - 😇🫶🫠",
				attachment: fs.createReadStream(__dirname + `/Nayan/ssstik.io_1721891866438.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
        }
