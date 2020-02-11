const Discord = require("discord.js");
// Say command
module.exports.run = (bot,msg,args)=>{
    
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('RM BOT', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(nocando);
    var what_to_say = args.join(" ");
    msg.channel.send(what_to_say)
   
}
module.exports.help={
    name:"say"
}
