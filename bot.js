const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
 

client.on('ready', () => {

    console.log('I am ready!');

});
console.log(process.env.TOKEN)

// THIS  MUST  BE  THIS  WAY

client.login(process.env.TOKEN);//BOT_TOKEN is the Client Secret
