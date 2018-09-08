const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("TestBot, .help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDg3NjMwODM0MDYxMjc5MjMy.DnQefg.3k3TZDCYCQVudQYAyzAahO9AYD8")

bot.on("message",message =>{
    if(message.content === ".youtube")
        message.reply("ma chaine youtube:https://www.youtube.com/channel/UC1vjGE19R9CbBibpj8UTtZA? ")
        console.log("youtube")

    if(message.content === ".twitch")
        message.reply("Ma chaine twitch :https://www.twitch.tv/niwok_fr ")
        console.log("twitch")
      
    if(message.content === ".twitter")
        message.reply("Mon twitter:https://twitter.com/pololepro46")
        console.log("twitter")

})
