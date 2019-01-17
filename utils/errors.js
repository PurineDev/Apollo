const Discord = require("discord.js");
const fs = require("fs");
let config = require("../config.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("No Perms")
    .setColor("RANDOM")
    .addField("Permission Denied", perm)
    
    message.channel.send(embed).then(m => m.delete(11000));
}