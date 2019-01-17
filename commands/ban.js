const Discord = require("Discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Permission Denied');
    if (!target) return message.reply('Specify a user!');
    if (!reason) return message.reply('Specify a reason!');


    message.channel.send(`${target.user.username} was banned by ${message.author} for ${reason}`);
    target.ban(reason);

};

module.exports.help = {
    name: "ban",
    aliases: [""]
}