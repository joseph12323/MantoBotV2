const axios = require("axios");

async function uid(matches, event, api, extra) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
    else if (mention[0]) {
        for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.keys(event.mentions)[i]}`, event.threadID, event.messageID);
        return;
    }
}
module.exports = uid;