var main = require("../index.js")
exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.id === "257396303791652875") return
    message.channel.fetchMessages({ limit: parseInt(args[0]) })
        .then(messages => message.channel.bulkDelete(messages))
        .catch(console.error);
    message.channel.send("Clearing 🔧 ").then(m => m.delete(5000))

}