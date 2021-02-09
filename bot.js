const Discord = require('discord.js');
const client = new Discord.Client();
const Distube = require('distube');
const botsettings = require("./botsettings.json")
require('dotenv').config()
 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on("message", (message) => {
    if (message.content === "Hello") {
      message.reply("Hello, welcome to our discord channel. I am Eugene");
    }
  });

//MUSIC 
client.distube = new Distube(client,{searchSongs:false,emitNewSongOnly:true});

client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
  .on("addSong", (message, queue, song) => message.channel.send(
    `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
))





client.login(process.env.TOKEN);//BOT_TOKEN is the Client Secret
