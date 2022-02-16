const Discord = require("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => {
  message.delete()
  
let min = 1;
let max = 4;
let m = Math.floor(Math.random() * (max - min + 2)) + min;
let img;
switch (m) {
  case 1:
    img = "https://cdn.discordapp.com/attachments/758411744082919475/876074063309733898/image1.gif";
    break;
  case 2:
    img = "https://cdn.discordapp.com/attachments/758411744082919475/876074062965784647/image0.gif";
    break;
  case 3:
    img = "https://cdn.discordapp.com/attachments/758411744082919475/876074063607509012/image2.gif";
    break;
  case 4:
    img = "https://cdn.discordapp.com/attachments/758411744082919475/876074063884349490/image3.gif";
    break;
}


const embed = new Discord.MessageEmbed() 
.setTitle("Лизка, зайка")
.setTimestamp()
.setFooter("Special for Kurpatov, by Unkestory")
.setImage(img)
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
// .setThumbnail("https://cdn.discordapp.com/attachments/758411744082919475/876074064177938452/image4.gif")
message.channel.send(embed)
}
module.exports.help = {
    name: "kto"};