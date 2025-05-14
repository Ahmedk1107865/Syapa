module.exports.config = {
 name: "uid",
 version: "1.0.0",
 permission: 0,
 credits: "Aaryan",
 usePrefix: false,
 description: "get user id.",
 commandCategory: "without prefix",
 cooldowns: 5
};

module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Zeeshan Altaf",
	description: "Dont Change This Credits Otherwisw Your Bot Lol",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`ye lo  ye hai ap ke user id: \n${event.senderID}\n\n ye ap ka messenger chat link:\nm.me/${event.senderID}\n\n ye ap ka facebook profile link:\nwww.facebook.com/${event.senderID} *★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝𝐒𝐘𝐀𝐏𝐀 😒🥂✨`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
}          
