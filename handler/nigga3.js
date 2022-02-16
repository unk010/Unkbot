const Discord = require("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete()
    let prefix = config.prefix
    const embed = new Discord.MessageEmbed() 
    .setDescription("**Типа толерантный да?**")
    .setTitle("``` Жалко тебя( )```")
    .setImage("")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    message.channel.send(embed)
}
module.exports.help = {
    name: "no"
}