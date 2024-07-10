const fs = require("fs");
module.exports = {
  config:{
	name: "npx24",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Raj", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😂")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "ও্ঁরে্ঁ কি্ঁ তু্ঁন্দ্ঁর্ঁ হা্ঁসি্ঁ রে্ঁ-!!😹 ",
				attachment: fs.createReadStream(__dirname + `/Nayan/MRK2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌝", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
        }
