const Discord = require("discord.js");
module.exports.run = (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")) return;
    var rules = new Discord.RichEmbed()
    .setTitle("-Applications-")
    .setDescription("1:How many hours do you have?\n2:How old are you?\n3:What role would best describe you?\n4:Have you ever played in a large group, elaborate...\n5:Are you willing to farm?\n6:How many hours can you be active?\n7:Do you agree with our rules?\n8:Please link your steam profile.")
    .setColor("#9B30FF")
    .setTimestamp()
    .setFooter('RM BOT', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');
    msg.channel.send(rules)
}

module.exports.help={
    name:"appsetup"
}
