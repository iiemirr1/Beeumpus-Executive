const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Booster Rolü Bilgileri`,`Booster Rolü Almak İçin Sunucuya Boost Basmanız Gereklidir.`)
    .addField(`Booster Avantajları`, `💸 | ▸Server Booster◂ Rolü Avantajları !

 <:ortak:705813855481233480>  | Sadece Boosterlere Özel 💸 | ▸Server Booster◂ Rolü Alırsınız. ( Süre : Boost Süresi Bitene Kadar )

 <:ortak:705813855481233480>  | Hesabınıza 45 Adet Davet Eklenir. ( Kalıcı )

 <:ortak:705813855481233480>  | 2x Boost Basarsanız 50 Davetlik 💎 | ▸Premium◂ Rolünü Direk Alırsınız. ( Süre : Kalıcı )

 <:ortak:705813855481233480>  | 💸 | ▸Server Booster◂ Süreniz Bittiğinde , 🔥 | ▸Özel Üye◂ Rolünü Alırsınız. ( Süre : Kalıcı )

 <:ortak:705813855481233480>  | İstediğiniz Kadar Kendi Adınızı Değiştirebilirsiniz.

 <:ortak:705813855481233480>  | Size Özel Sohbet Kanalları .

 <:ortak:705813855481233480>  | Size Özel İstek Log Kanalı.

 <:ortak:705813855481233480>  | Adınızın Yanına Booster Sembolü.

 <:ortak:705813855481233480>  | Yardımlarda Öncelik.

 <:ortak:705813855481233480>  | Son Olarak , Everyone Ve Here'siz 2 Günlük Reklam !`)
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
   