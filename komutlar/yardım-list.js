const Discord = require("discord.js");

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Komut Listesi")
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      "**•** **!yetkili** Sunucuyu yönetmek için gerekli olan komutlar.\n**•** **!eğlence** Eğlenmek için bulunan komutlar.\n**•** **!kullanıcı** Kullanıcılar için komutlar.\n**•** **!bot** Bot ile alakalı komutları görürsünüz."
    )
    .addField(
      "» Linkler",
      `[Bot Davet Linki](Yakında !)` +
        "**\n**" +
        `[Bota Oyver](Yakında !)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/Z2zuGCR)`,
      false
    )
    .setFooter("Mechanic Topluluk Sunucusu");
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardımss",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
