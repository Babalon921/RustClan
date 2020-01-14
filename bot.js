const Discord = require("discord.js");
const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (er, files)=>{
    if(er) console.log(er);
    //Pops the js off the filename spliting where the . is
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.legth <= 0){
        console.log("Error In finding Commands")
        return;
    }
    // each file say that it has loaded successfully!
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded successfully`);
        bot.commands.set(props.help.name, props);
    })
});


bot.on("ready", member => {
console.log("Bot Made by Babalon921 @𝔹𝕒𝕓𝕒𝕝𝕠𝕟⁹ ² ¹#0050");

});
bot.on("message", msg =>{
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    if(!msg.content.startsWith(prefix))return;
    
    let msgarray = msg.content.split(/ +/);
    let cmd = msgarray[0];
    let args = msgarray.slice(1);

    let commandsfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandsfile) commandsfile.run(bot,msg,args);

});




bot.login(token)