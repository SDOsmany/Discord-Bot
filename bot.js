const Discord = require("discord.js");
const client = new Discord.Client();
const sus = require("./Components/sus/index");
const run = require("./Components/youtube/search")

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content === "Hello") {
    message.reply("Hello, welcome to our discord channel. I am Eugene");
  }
  sus(message);
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.TOKEN); //BOT_TOKEN is the Client Secret
