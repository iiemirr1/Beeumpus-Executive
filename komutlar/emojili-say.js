const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": " <a:emoji_0:708263200025477161>",
  "1": " <a:emoji_1:708263098280312832>",
  "2": " <a:emoji_2:708263259748433991>",
  "3": " <a:emoji_3:708263296091815936>",
  "4": " <a:emoji_4:708263353096732782>",
  "5": " <a:emoji_5:708263385950584892>",
  "6": " <a:emoji_6:708263422919311410>",
  "7": " <a:emoji_7:708263463377698847>",
  "8": " <a:emoji_8:708263498559258655>",
  "9": " <a:emoji_9:708263537746903101>",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};

"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
//Developer By CodeShare
exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi Sayısı :** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi Sayısı :** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**Çevrimiçi Kişi Sayısı :** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.RichEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('BLACK')
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')
.setFooter('')

  message.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};