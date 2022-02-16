const Discord = require("discord.js");

module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('p!'))return;
  message.delete()
  if(message.author.bot) return
        message.delete()
        let embed = new  Discord.MessageEmbed()
        .setColor(`FFA500`)
        .setTitle(`Pong!🏓`)
        .setDescription(`Мой пинг: ** ${bot.ws.ping} **`)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
}

module.exports.help = {
  name:"testi",
  aliases: ["playercmd"]
}