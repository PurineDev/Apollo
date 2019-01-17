const http = require('http');
const botconfig = require("./config.json");
const Discord = require("discord.js");
const twemoji = require("twemoji");
const chalk = require("chalk")
const bot = new Discord.Client({
    disableEveryone: true
})
const fs = require("fs");
const request = require("request");
bot.commands = new Discord.Collection();
exports.Discord = Discord
exports.bot = bot
exports.request = request


var c = {}
fs.readdirSync("./commands").forEach(f => {
    c[f.match(/\w+(?=.js)/)[0]] = require(`./commands/${f}`)
    console.log(chalk`{red.bold READY}: ${f}`)
})

//Bots Activity.

bot.on("ready", async () => {
    console.log(`${bot.user.username} is now online!`)
    bot.user.setActivity("Your Server | DM For Help. 🎉 ", {
        type: 'WATCHING'
    })
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") { message.channel.send("Join our Discord for support! - https://Discord.gg/EKfFMj3 "); return }

    if (!message.content.toLowerCase().startsWith(botconfig.prefix)) return
    
	let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);

    var rawCommand = message.content.split(" ")[0].substring(botconfig.prefix.length)
    if (c[rawCommand] === undefined) { message.channel.send("This command is not recognised... Try i!help :peach: ") } else {
        c[rawCommand].run(bot, message, args);
    }


       });

bot.login(botconfig.token);