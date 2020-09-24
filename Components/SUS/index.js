const sus = (message) => {
  if (message.content === "SUS") {
    let randomVar = Math.floor(Math.random() * 12 + 1);
    switch (randomVar) {
      case 0:
        message.reply("Yellow did it!. Kick him of the ship");
        break;
      case 1:
        message.reply("Blue did it!. Kick him of the ship");
        break;
      case 2:
        message.reply("Orange did it!. Kick him of the ship");
        break;
      case 3:
        message.reply("Purple did it!. Kick him of the ship");
        break;
      case 4:
        message.reply("Cyan did it!. Kick him of the ship");
        break;
      case 5:
        message.reply("Brown did it!. Kick him of the ship");
        break;
      case 6:
        message.reply("Red did it!. Kick him of the ship");
        break;
      case 7:
        message.reply("Black did it!. Kick him of the ship");
        break;
      case 8:
        message.reply("White did it!. Kick him of the ship");
        break;
      case 9:
        message.reply("Lime did it!. Kick him of the ship");
        break;
      default:
        message.reply("Pink did it!. Kick him of the ship");
    }
  }
};
module.exports = sus
