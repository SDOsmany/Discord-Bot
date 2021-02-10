
const config = require('../settings.json');

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );
  const music = args.join(" ");
  bot.disbute.play(message, music);
};

module.exports.config = {
  name: "play",
  aliases: ["p"],
};
