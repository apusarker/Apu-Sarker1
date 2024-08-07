const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "-❒ 🤖 | 𝐌𝐄𝐒𝐒𝐄𝐆𝐄:\n╰┈➤ ভালোবাসা নামক আব্লামি করতে মন চাইলে বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 এর ইনবক্স চলে যাও "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
