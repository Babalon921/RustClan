const Discord = require("discord.js");
//Help Command
module.exports.run = (bot,msg,args)=>{

    var adminhelp = new Discord.RichEmbed()
    .setAuthor("~~~~~~~~~~~~~HELP~~~~~~~~~~~~~")
    .setThumbnail("https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png")
    .setDescription("^ = permisson's needed!")
    .addField("Prefix:","£")
    .addField("Ban:","Ban's Member from the server (ex.>ban @banman {reason})")
    .addField("Kick:","Kick's Member from the server (ex.>kick @kickman {reason})")
    .addField("Checknum:","Use The code at the end of a profile (ex. steamurl/profile/yournum")
    .addField("Checkid:","Use The ID at the end of a profile (ex. steamurl/id/yourid")
    .setColor("#ff0000")
    msg.channel.send(adminhelp).then(newMessage => newMessage.delete(120000));
   
}

module.exports.help ={
    name:"help"
}