const Discord = require("Discord.js");
const config = require('../config.json');
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');

    if (!message.member.hasPermission('ADMINISTRATOR')) return errors.noPerms(message, "ADMINISTRATOR");
    if (!target) return message.reply('Specify a member!');
    if (!reason) return message.reply('Specify a reason!');


    message.channel.send(`${target.user.username} was kicked by ${message.author} for ${reason}`);
    target.kick(reason);

};

module.exports.help = {
    name: "kick",
    aliases: [""]
}