const Discord = require("discord.js");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
    if(message.author.id !== "257396303791652875"){
        return message.channel.send("Owner Only.")
    }
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
      
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
    name: 'eval.js'
}