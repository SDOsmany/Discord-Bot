const Discord = require('discord.js');
const client = new Discord.Client();
import SUS from './Components/SUS/index'

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === 'Hello') {

       message.reply('Hello, welcome to our discord channel. I am Eugene');

       }
    SUS(message);


});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.TOKEN);//BOT_TOKEN is the Client Secret
