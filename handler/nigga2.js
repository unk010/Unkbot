const Discord = require("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot, message, args) => {
 // if (message.channel.type == "nigga") return;
    message.delete()
    let min = 1;
let max = 4;
let m = Math.floor(Math.random() * (max - min + 1)) + min;
let img;
switch (m) {
  case 1:
    img = "https://dailystormer.su/wp-content/uploads/2020/07/1594786600000.gif";
    break;
  case 2:
    img = "https://cs9.pikabu.ru/post_img/2020/07/20/10/og_og_1595262374286267905.jpg";
    break;
  case 3:
    img = "https://forums.goha.ru/cdn/forum/picture/100/100929.picture";
    break;
  case 4:
    img = "https://s.fishki.net/upload/users/2021/05/05/321572/2717bb02e98d1d3522b1c920f3e2f2ad.jpg";
    break;
}


    const embed = new Discord.MessageEmbed() 

    .setTitle("Окей, бро, ты лучший!" )
    .setTimestamp()
    .setImage(img)
    // .setThumbnail()
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    message.channel.send(embed)
    

}
module.exports.help = {
    name: "yes"};