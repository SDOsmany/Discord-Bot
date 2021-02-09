module.exports.run=async(client,message,args)=>{
    const music = args.join(" ");
    client.distubnoe.play(message,music)
}