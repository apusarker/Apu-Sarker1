const fs = require("fs");
module.exports = {
  config:{
	name: "npx19",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😻")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "_ওমা তুমি আমার উপর ক্রাশ খেয়েছো নাকি_🙆🤭🙈",
				attachment: fs.createReadStream(__dirname + `/Nayan/audioclip-1721205924000-6502.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙀", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
