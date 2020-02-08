const Discord = require("discord.js");
module.exports.run = (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")) return;
    var rules = new Discord.RichEmbed()
    .setTitle("-ROLES-")
    .addField("Location: ","Do -role <location> (UK,US,EU,AS)")
    .setColor("#9B30FF")
    .setTimestamp()
    .setFooter('RM BOT OPTIONAL CONFIG', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');

    msg.channel.send(rules)
    
}

module.exports.help={
    name:"rolesetup"
}
