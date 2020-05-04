const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("")
    .addField(`**Premium Rolü Bilgileri**`,`Premium Rolü Almak İçin 50 İnvite Yapmanız Gerekiyor.`)
    .addField(`**Premium Avantajları**`, `

 <:ortak:705813855481233480>  | Sadece Size Özel <@&705809158410338408> Rolünü Alırsınız.

 <:ortak:705813855481233480>  | Sunucu İçinde 2 Kez Adınızı Değiştirebilirsiniz.

 <:ortak:705813855481233480>  | <@&705810957258981448> Rolünü Alırsınız !

 <:ortak:705813855481233480>  | Size Özel Altyapılara Ve Kodlara Erişim Sağlarsınız !

 <:ortak:705813855481233480>  | Size Özel Sohbet Kanalları !

 <:ortak:705813855481233480>  | Size Özel Çekilişler !

 <:ortak:705813855481233480>  | Yardımlarda Öncelik !

 <:ortak:705813855481233480>  | <@&705809158410338408> Kişilere Özel Genel Log`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'premium',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   