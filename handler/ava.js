const Discord = require ("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => 

{
    message.delete()

    
    const embed = new Discord.MessageEmbed() 
        .setDescription("``Your avatar``")
        .setImage(message.author.displayAvatarURL())
        .setColor("BLACK")
        .setFooter( ` Requested by - ${message.author.username}  `, )


message.channel.send(embed)

}
module.exports.help = {
    name: "ava"};