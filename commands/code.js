
const Discord = require('discord.js');

module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    if(!args[0]){return;}
    var mention = msg.mentions.users.first().id
    bot.users.get(mention).send("Code: 5196");
    var fetch = new Discord.RichEmbed()
    .setTitle("Sent Code To "+args[0])
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('CB BOT', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');

    msg.channel.send(fetch)
    
}

module.exports.help ={
    name:"code"
}