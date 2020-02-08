var Discord = require("discord.js")


module.exports.run = (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")) return;
    msg.delete()
    var wipemsg = new Discord.RichEmbed()
    .setTitle("💥Wipe Day💥(_NEWWIPE_)")
    .addField("GET YOU AK SPRAY ON!: ","🔥🔥🔥🔥🔥")
    .addField("GET MAFIA LEADERSHIP FOR INFO ","🔥🔥🔥🔥🔥")
    .addField("GOTO #announcements ","🔥🔥🔥🔥🔥")
    .setTimestamp()
    .setFooter('RM BOT OPTIONAL CONFIG', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');
    
    const role1 = msg.guild.roles.get("673581510326222873")
    try {
        msg.guild.members.filter(member => member.bannable).forEach(member => {member.removeRole(role1)});
        msg.delete(1000);
    } catch(e) {
        console.log(e.stack);
    }
    msg.channel.send(wipemsg).then(msg.channel.send("@everyone"))
    

} 
module.exports.help ={
    name:"wipe"
}
