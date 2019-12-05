const Discord = require("discord.js");
// Say command
module.exports.run = (bot,msg,args)=>{

    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('CB BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(nocando);
    var what_to_say = args.join(" ");
    msg.channel.send(what_to_say)
   
}
module.exports.help={
    name:"say"
}
