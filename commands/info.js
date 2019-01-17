const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    var infoembed = new Discord.RichEmbed()
    .setDescription(`Apollo is a smart bot that can moderate your Discord. We attempt to make Discord a more congenial place.\nAny help for commands for the bot can be found by running a+help.`)
    .setThumbnail(bicon)
    .setColor("#ad0f0f")
    .setFooter("Apollo™")
    .addField("Invite", `[Click Here](https://bit.ly/2Rwk3d1)`, true)
    .addField("Support", `[Click Here](https://bit.ly/2FFyiFs)`, true)

    message.channel.send(infoembed);
}

module.exports.help = {
  name: "infoembed",
  aliases: [""]
}