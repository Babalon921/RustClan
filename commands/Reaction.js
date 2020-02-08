var Discord = require("discord.js")
var datetime = new Date();

module.exports.run = (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")) return;
    msg.delete()
    var wipemsg = new Discord.RichEmbed()
    .setTitle("React To Above^ To Config or Set Play Status!")
    .setFooter('RM BOT OPTIONAL CONFIG', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png')

    msg.channel.send(wipemsg)
    

} 
module.exports.help ={
    name:"reaction"
}
