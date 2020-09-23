const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login("NzU4MDkxNTE5NjUwNDMxMDY2.X2p5vg.1GVWKDtSYqUOxGJnBKwQg7QPdLI");//BOT_TOKEN is the Client Secret
