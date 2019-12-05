const Discord = require("discord.js");

module.exports.run = (bot,msg,args)=>{
    try{
    let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!rUser)return msg.channel.send("User Not Found.");
    let reason = args.join(" ").slice(22);


    let reportem = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff0000")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${msg.author} with ID: ${rUser.id}`)
    .addField("Channel", msg.channel)
    .addField("Time", msg.createdAt)
    .addField("Reason", reason);
    
    let reportchannel = msg.guild.channels.find(`name`,"⚔incident⚔");
    if(!reportchannel)return msg.channel.send("Couldnt find reportChannel!")
    var checkreport = new Discord.RichEmbed()
    .setTitle("Check Report In Reportchannel ")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('CB BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');

    msg.channel.send(checkreport)
    msg.delete().catch(O_o=>{});
    reportchannel.send(reportem)
    return;
    }
    catch(e){
        msg.channel.send("Error! Not enought arguments to report (tip:add a reason or mention a user)")
}};
module.exports.help ={
    name:"report"
}
