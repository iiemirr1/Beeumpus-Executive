const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("")
    .addField(`**Booster Rolü Bilgileri**`,`Booster Rolü Almak İçin Sunucuya Boost Basmanız Gereklidir.`)
    .addField(`<a:booster:706824717704626188>  **Booster Avantajları**\n`, `

 <a:boost:706824674168012860>  | Sadece Boosterlere Özel <@&705810600915370056> Rolü Alırsınız. ( Süre : Boost Süresi Bitene Kadar )

 <a:boost:706824674168012860>  | Hesabınıza 45 Adet Davet Eklenir. ( Kalıcı )

 <a:boost:706824674168012860>  | 2x Boost Basarsanız 50 Davetlik <@&705809158410338408> Rolünü Direk Alırsınız. ( Süre : Kalıcı )

 <a:boost:706824674168012860>  | <@&705810600915370056> Süreniz Bittiğinde , <@&705810957258981448> Rolünü Alırsınız. ( Süre : Kalıcı )

 <a:boost:706824674168012860>  | İstediğiniz Kadar Kendi Adınızı Değiştirebilirsiniz.

 <a:boost:706824674168012860>  | Size Özel Sohbet Kanalları .

 <a:boost:706824674168012860>  | Size Özel İstek Log Kanalı.

 <a:boost:706824674168012860>  | Adınızın Yanına Booster Sembolü.

 <a:boost:706824674168012860>  | Yardımlarda Öncelik.

 <a:boost:706824674168012860>  | Son Olarak , Everyone Ve Here'siz 2 Günlük Reklam !`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'booster',
  description: 'Booster Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'booster'
};
   