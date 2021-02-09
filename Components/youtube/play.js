module.exports.run=async(client,message,args)=>{
    const music = args.join(" ");
    client.distube.play(message,music)
}