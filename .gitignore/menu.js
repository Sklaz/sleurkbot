const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NTg0NDE3MzQ5NTM3NjI4MTcw.XPKnMA.vTeBSx6ZTrtgQ_EB59bxThHjht8");

var prefix = ("sb!");

client.on("message", (message) => {

    if(message.content === prefix + "bonjour") {
        message.channel.send("salutation !")
    }
    
    if(message.content === prefix + "help"){
        message.channel.send("Veux-tu de l'aide ?")
    }
    
});
