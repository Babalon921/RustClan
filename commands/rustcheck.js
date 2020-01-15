const Discord = require("discord.js")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = new XMLHttpRequest();
const request2 = new XMLHttpRequest();
const request3 = new XMLHttpRequest();
const request4 = new XMLHttpRequest();
const request5 = new XMLHttpRequest();
const request6 = new XMLHttpRequest();
module.exports.run = (bot,msg,args)=>{
    request.open("GET","https://api.rust-servers.info/status/1160")
    request.send();
    request.onload = function(){
        var json = request.responseText
        var data = JSON.parse(json)
        console.log(data)
        request2.open("GET","https://api.rust-servers.info/status/1170")
        request2.send();
        request2.onload = function(){
        var json2 = request2.responseText
        var data2 = JSON.parse(json2)
        console.log(data2)
        
        request3.open("GET","https://api.rust-servers.info/status/19")
        request3.send();
        request3.onload = function(){
        var json3 = request3.responseText
        var data3 = JSON.parse(json3)
        console.log(data3)
        request4.open("GET","https://api.rust-servers.info/status/392")
        request4.send();
        request4.onload = function(){
        var json4 = request4.responseText
        var data4 = JSON.parse(json4)
        console.log(data4)
        request5.open("GET","https://api.rust-servers.info/status/2725")
        request5.send();
        request5.onload = function(){
        var json5 = request5.responseText
        var data5 = JSON.parse(json5)
        console.log(data5)
        var RUSTserver = new Discord.RichEmbed()
        .setAuthor("S͟E͟R͟V͟E͟R͟I͟N͟F͟O͟")
        .setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/687094810512264399/04BA8A55B390D1ED0389E561E95775BCF33A9857/")
        .setDescription("Server List: ")
        .addField("Rustafied.com - Hapis: ",data.status)
        .addField("Players: ",data.players+"/150")
        .addField("Rustafied.com - Long II: ",data2.status)
        .addField("Players: " ,data2.players+"/200")
        .addField("Rustafied.com - Small: ","Unknown")
        .addField("Players: " ,data3.players+"/150")
        .addField("Rustafied.com - Medium II ",data4.status)
        .addField("Players: " ,data4.players+"/200")
        .addField("US Bloo Lagoon  1.5x Vanilla  Max Group size 6: ",data5.status)
        .addField("Players: " ,data5.players+"/175")
        .setColor("#d3d3d3")
        msg.channel.send(RUSTserver);
    
    };
    };
    };
    };
    };
    
}

module.exports.help ={
    name:"crustserver"
}