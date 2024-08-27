const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("yetkin yok")
  let sayi = args[0]
  if (!sayi) return message.reply("Lütfen silinecek sayı miktarını gir")
 message.channel.bulkDelete(sayi)
 message.channel.send(',Başarıyla **'+ sayi + '** Mesaj Sildim.')
}
exports.conf = {
  aliases: ['temiz', 'temizle']
};

exports.help = {
  name: "sil"
};
