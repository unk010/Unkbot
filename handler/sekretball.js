const Discord = require("discord.js")
let config = require ("../botconfig.json");
module.exports.run = async (bot,message,args) => {
    message.delete()
    let prefix = config.prefix
    if(!args[0]) return message.reply(`${prefix}random 'вопрос' `);
    let replies = [
        'Бесспорно.',
        'Предрешено.',
        'Никаких сомнений.',
        'Определённо да.',
        'Можешь быть уверен в этом.',
        'Мне кажется да.',
        'Вероятнее всего.',
        'Хорошие перспективы.',
        'Знаки говорят да.',
        'Да',
        'Пока не ясно, попробуй снова.',
        'Спроси позже.',
        'Лучше не рассказывать.',
        'Сейчас нельзя предсказать.',
        'Сконцентрируйся и спроси опять.',
        'Даже не думай.',
        'Мой ответ нет.',
        'По моим данным нет.',
        'Перспективы не очень хорошие.',
        'Весьма сомнительно.',
        'Нет',
        'что ты хотел услышать, то и будет тебе ответом'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Важный вопрос, рандомный ответ')
    .addField('Вопрос:', question, true)
    .addField('Ответ:', replies[result], true)
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

    message.channel.send(embed);
};
module.exports.help = {
    name: "random"};