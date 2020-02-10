
const Discord = require('discord.js');

module.exports.run = (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")){return};

}

module.exports.help ={
    name:"code"
}