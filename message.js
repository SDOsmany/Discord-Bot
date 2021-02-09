module.exports = async (client, message) => {
  if (message.author.client) return;

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  if (message.author.client || message.channel.type === "dm") return;
  const prefix = "?";

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
    return message.channel.send(
      `${message.guild.name}'s Prefix is \`${prefix}\`\n\nTo get a list of commands, say \`${prefix}help\``
    );

  if (!message.content.startsWith(prefix)) return;
  const commandfile =
    client.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) ||
    client.commands.get(
      client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase())
    );
  if (commandfile) {
    commandfile.run(client, message, args);
  }
};
