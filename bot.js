const Discord = require('discord.js');
const client = new Discord.Client();
const Distube = require('distube');
require('dotenv').config()
 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on("message", (message) => {
    if (message.content === "Hello") {
      message.reply("Hello, welcome to our discord channel. I am Eugene");
    }
  });


client.distube = new Distube(client,{searchSongs:false,emitNewSongOnly:true});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.TOKEN);//BOT_TOKEN is the Client Secret
