const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
 

client.on('ready', () => {

    console.log('I am ready!');

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.TOKEN);//BOT_TOKEN is the Client Secret
