const fs = require("fs");
module.exports.config = {
	name: "Owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MARINA TRICKER", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Owner",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Syapa")==0 || event.body.indexOf("syapa")==0 || event.body.indexOf("SYAPA")==0 || event.body.indexOf("SyApA")==0) {
		var msg = {
				body: "SIYAPA OWNER ABHI BUZY HAIN JO BAT BOLNI HAIN MUJHY BATYE WO FREE HOGY TO MA BATA DUGA APKA PYARA BOT",
				attachment: 
fs.createReadStream(__dirname + `/noprefix/SYAPA.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("react emoji", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
