const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589421447974486047")
setInterval(function() {
channel.send(`5ara 5ara 5ara 5ara 5ara5ara 5ara 5ara 5ara 5ara5ara5ara5ara5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara5ara5ara5ara5ara5ara 5arav 5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara 5ara v 5ara 5ara 5ara 5ara 5ara 5ara v v `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
