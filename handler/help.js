const Discord = require("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete()
    let prefix = config.prefix
    const embed = new Discord.MessageEmbed() 
    
    .setTitle(" ⬇ На данный момент доступны следующие команды ⬇ ")
    .addFields(
        {
            name: `${prefix}nigga`,
            value: "``!yes, !no``", 
            inline: true,
        },
        {
            name: `${prefix}random`,
            value: "``Задавайте вопрос на который вам ответит бот``",
            inline: true,
        },
        {
            name: `${prefix}id`,
            value: "`` Очевидно выдаст ваш личный id ``",
            inline: true,
        },
        {
            name: `${prefix}ava`,
            value: "`` Покажет ваш аватар в более широком формате ``",
            inline: true,
        },
        
        
    
    )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())



    message.channel.send(embed)
}
module.exports.help = {
    name: "help"};