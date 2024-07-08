const fs = require("fs");
module.exports = {
  config:{
	name: "npx10",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😜")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "জান পম পম খাবা 🥹🥵🙈",
				attachment: fs.createReadStream(__dirname + `/Nayan/pompomkaba.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
