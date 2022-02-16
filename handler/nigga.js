const Discord = require("discord.js");
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => {
  message.delete()
    let ava = message.author.avatarURL
    let prefix = config.prefix
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail("https://j.gifs.com/yXep9b.gif")
    .setTitle("NIGGERS: :baby_tone5:" )
    .addField('Nigga one'," :person_raising_hand_tone5: ")
    .addField('Nigga two'," :woman_red_haired_tone5: ")
    .addField('Nigga three',":ok_hand_tone5: :point_left_tone5:")
    .addField('Nigga four',":poop:")
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed)
    
   
    message.reply(`i hate niggers, you hate niggers?  ${prefix}yes | ${prefix}no |` );
};
  module.exports.help = {
  name: "nigga"};
  