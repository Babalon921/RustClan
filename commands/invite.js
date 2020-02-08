const Discord = require("discord.js");
// Say command
module.exports.run = (bot,msg,args)=>{
    var invite = new Discord.RichEmbed()
    .setTitle("https://discord.gg/Eus6HCf")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('RM BOT', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');
    msg.channel.send(invite)
}
module.exports.help={
    name:"invite"
}
