const Discord = require("discord.js");
//Help Command
module.exports.run = (bot,msg,args)=>{

    var adminhelp = new Discord.RichEmbed()
    .setAuthor("~~~~~~~~~~~~~HELP~~~~~~~~~~~~~")
    .setThumbnail("https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png")
    .setDescription("^ = permisson's needed!")
    .addField("Prefix:","^")
    .addField("Ban:","Ban's Member from the server (ex.>ban @banman {reason}) ^msg_management")
    .addField("Kick:","Kick's Member from the server (ex.>kick @kickman {reason}) ^msg_management")
    .setColor("#ff0000")
    msg.channel.send(adminhelp)
   
}

module.exports.help ={
    name:"help"
}