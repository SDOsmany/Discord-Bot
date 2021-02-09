const ytsr = require("ytsr");
const {MessageEmbed} = require("discord.js");

module.exports.run= async(client,message,args)=>{
    const query = args.join(" ");
    if(!query) return message.channel.send("Please provide a search query");

    const res = await ytsr(query).catch(e=>{
        return message.channel.send("No results were found");
    });

    const video = res.items.filter(i => i.type == "video")[0];
    if(!video) return message.channel.send("No results were found");

    const embed = MessageEmbed()
    .setTitle(video.title)
    .setImgage(video.thumbnail)

    return message.channel.send(embed)

};