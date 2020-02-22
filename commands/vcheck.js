const fs = require("fs")
const Discord = require("discord.js")
module.exports.run = (bot,msg,args)=>{
    fs.readFile('./store/channellog.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        var obj = JSON.parse(data);
        var who = new Discord.RichEmbed()
        .setTitle("User "+obj.log[0].DisplayName+" "+ obj.log[0].State +" Channel: "+obj.log[0].Channel)
        .setFooter('RM BOT OPTIONAL CONFIG', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png')
        msg.channel.send(who)
    }});


}


module.exports.help={
    name:"vcheck"
}
