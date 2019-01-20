const Discord = require("discord.js");

module.exports.run = async (bot, message, args, user) => {
   
    let bicon = message.author.avatarURL;
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .setFooter("Apollo™");

    message.channel.send(serverEmbed);
}

module.exports.help = {
  name:"serverinfo"
}