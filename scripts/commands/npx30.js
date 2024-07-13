const fs = require("fs");
module.exports = {
  config:{
	name: "npx30",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("💔")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "•⎯͢⎯⃝🙂ভালোবাসা কথাটা হয়তো তুচ্ছ  🙂 < কিন্তু এর মায়া অনেক ভাংকার ⎯͢⎯⃝🤍🫶🌺!-✍️⎯͢⎯⃝🩵 𝐅𝐀𝐇𝐈𝐌⎯͢⎯⃝🩷",
				attachment: fs.createReadStream(__dirname + `/Nayan/brkup.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
