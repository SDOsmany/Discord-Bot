module.exports.run=async(client,message,args)=>{
    const music = args.join(" ");
    client.disbute.play(message,music)
}

module.exports.config = {
    name: "play",
    aliases:['p']
} 	