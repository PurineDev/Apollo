var main = require("../index.js")

module.exports.run = async (client, message, args) => {

    var totalCount = 0;
    main.bot.guilds.forEach(g => { totalCount += g.memberCount })
    

    let statsEmbed = new main.Discord.RichEmbed()
        .setTitle("Check out my stats! :fire: ")
        .setColor([0, 255, 0])
        .addField("Total Users: ", totalCount)
        .setTimestamp(new Date())
        .setFooter("bots.rich™")

    message.channel.send(statsEmbed)
    
    module.exports.help = {
        name: "stats",
        aliases: [""]
    }
}