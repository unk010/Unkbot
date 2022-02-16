// by Unkestory 
let config = require ("./botconfig.json");
let token = config.token
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require ("fs");
let prefix = config.prefix

fs.readdir('./handler/', (err, files) => {
    let ch = 0;
    if (err) { console.log(err);}
    const jsfile = files.filter(f => f.split('.').pop() === 'js');
    jsfile.forEach((f) => {
        const props = require(`./handler/${f}`);
        ch++;
        client.commands.set(props.help.name, props);
    });
    console.log(`Нашёл: ${ch} команд`)
});


client.on('message', async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
    if (!message.member) return;
    let prefix = config.prefix
        message.content = message.content.substr(prefix.length);
        const newStr = message.content.replace(/\s+/g, ' ');
        const messageArray = newStr.split(' ');
        const cmd = messageArray[0].toLowerCase();
        const args = messageArray.slice(1);
        const commandfile = client.commands.get(cmd);
        if (!commandfile) return;
            commandfile.run(client, message, args);
});

client.on('ready', () => {
    console.log(`Статус подключен!`);
    client.user.setPresence({
        status: 'idle',
        activity: {
            type: 'PLAYING',
            name: `${prefix}help`,
        },
    });
});

/// При заходе нового участника сервера ⬇

client.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Новый участник')
    .setDescription(`Привет, ${member}`)
    .setImage(member.user.displayAvatarURL())
    .setColor("RED")
    member.send(embed)
    member.roles.add("792714172676046898")
    member.send(" 🌟 **Добро пожаловать на сервер, Welcome to the server** 🌟 ")

  });
  
  var queue = new Map();

const ytdl = require('ytdl-core');

client.on('ready', () => console.log("Музыка подрублена!"));

client.on('message', async (message) => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "play") {
        if(!args[0]) return;
        let url = args.join(" ");
        if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Ссылка не работает - не существует");

        let serverQueue = queue.get(message.guild.id);
        let vc = message.member.voice;

        if(!vc) return message.channel.send("Ты не в голосовом канале");

        if(!vc.channel.permissionsFor(client.user).has('CONNECT') || !vc.channel.permissionsFor(client.user).has('SPEAK')) return message.channel.send("Выдай права для подключения к каналу...");

        let songinfo = await ytdl.getInfo(url);
        let song = {
            title: songinfo.title,
            url: songinfo.video_url
        }

        if(!serverQueue) {
            let queueConst = {
                textChannel: message.channel,
                voiceChannel: vc.channel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueConst);
            queueConst.songs.push(song);

            try {
                let connection = await vc.channel.join();
                queueConst.connection = connection
                playSong(message.guild, queueConst.songs[0])
            } catch (error) {
                console.log(error);
                queue.delete(message.guild.id);
                return message.channel.send("Ошибо4ка: " + error);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} **Теперь это в очереди**`)
        }
    }
})

/**
 * 
 * @param {Discord.Guild} guild 
 * @param {Object} song 
 */
async function playSong(guild, song) {
    let serverQueue = queue.get(guild.id);

    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
        serverQueue.songs.shift();
        playSong(guild, serverQueue.songs[0]);
    })
    .on('error', () => {
        console.log(error)
    })

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

  

/* 
module.exports.run = async (client, message, args) => {

    if(!message.content.startsWith('!'))return; 

    const useruser = "Написал -  " + message.author.username; 
    const userurl = message.author.avatarURL(); 
   let embed = new Discord.MessageEmbed() 
   .setColor("RANDOM") 
   .setDescription(`Загрузка...хуюзка...`) 
   .setTimestamp() 
   message.channel.send(embed).then(message =>{ 
    embed.setColor("RANDOM")
    embed.setDescription(`yes, phonk **\`${client.ws.ping[0]}ms\`**`)
    embed.setFooter(useruser, userurl)
    embed.setTimestamp() 
    message.edit(embed) }) }
    module.exports.help = {
    name: "phonk",
    description: "напишите что-то",
    usage: "phonk [хуй]"

   }
 */


client.on("message", function(message) {
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    
    let uid = message.author.id
    
/*     if(!profile[uid]){
        profile [uid] ={

        coins:10,
        xp:0,
        lvl:1,
        warns:0,
        muted:0,



        };

    };
// system stonks
    let u = profile[uid] 
    u.coins++;
    u.xp++;
    if(u.xp>= (u.lvl * 5)) {
        u.xp = 0 ,
        u.lvl += 1
    }


});
 */
/* if(command === "help" ) 
{
    message.delete()
    let embed = new Discord.MessageEmbed()
.setColor('42aaff')
.setTitle('Помощник')
    message.edit(embed.setDescription(`**Напишите в чат  и получите приз!\n\nУ вас осталось ??? **`))
    

    message.reply("На данный момент доступны следующие команды: ```!id```")
    message.reply("Bot in developer!")
    message.reply(embed);

}
}); */
});

client.on("message", function(message)  {
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    console.log(`Кто-то использует команды!`);

    
//    if (!message.content.startsWith(prefix)) return;


    

// writefile
    /* fs.writeFile("./par.json",JSON.stringify(profile), (err) =>{
        if (err) console.log("err the profile") */
    //});

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();


    if(command === "profile") {
        message.delete()
        message.reply('This command don`t developer!' )
    //   .setImage(author.displayAvatarURL())
       
        // else (!user) return message.reply("юзер не упомянут");
    }
    if(command === "id")  {
        message.delete()
    //    const uk = new MessageChannel
        message.reply('Нажми на себя пкм и нажми **"Копировать id"** ')
        
    }

});

client.login(token);





