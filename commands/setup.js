const Discord = require("discord.js");
module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    var rules = new Discord.RichEmbed()
    .setTitle("-RULES-")
    .addField("1: ","Absolutely NO ear rape. The first offense will get you deafened for a day, the second a week, and the third a ban.")
    .addField("2: ","Be respectful of each other if your teammate fucks up you can call him out, however do not be an asshole about it.")
    .addField("3: ","No teamkilling whatsoever if not accidental it will earn you an immediate ban, unless it is forgiven by the member you killed.")
    .addField("4: ","No rage quitting, if you lose a gearset go farm to make up for it. Dont be a leech on the clan.")
    .addField("5: ","Do not research high tier items without high ranking permission. Always ask before using scrap.")
    .addField("6: ","Do not rocket or c4 raid without permission from a high ranking member. Expo raids are ok if it is silenced and at least a trio.")
    .addField("7: ","Never post codes in discord only dm trusted members. (trusted members have roles)")
    .setColor("#9B30FF")
    .setTimestamp()
    .setFooter('RM BOT', 'https://cdn.discordapp.com/attachments/673186881516732465/673189495952244736/ezgif-6-6ca42269e32a.png');

    msg.channel.send(rules)

}

module.exports.help={
    name:"setup"
}
