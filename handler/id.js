const Discord = require("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete()
    let prefix = config.prefix
    let uid = message.author.id
    const embed = new Discord.MessageEmbed() 

        .setDescription("⬇Your id⬇")
        .setTitle("")
        .addField("**User id**", `\`\`${uid}\`\``)
        .setImage("https://sun9-42.userapi.com/impg/3KZRu-PXyPHucE3ky_IztUhh000GRXB9__-TkQ/iATrGCAEJYM.jpg?size=480x414&quality=96&sign=b21d1e448ae8a826e656ccd0266f8937&type=album")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
        .setColor(0x340032)
        .setTimestamp()
    message.channel.send(embed)
    
}
module.exports.help = {
    name: "id"};