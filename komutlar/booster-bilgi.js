const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`**Booster Rolü Bilgileri**`,`Booster Rolü Almak İçin Sunucuya Boost Basmanız Gereklidir.`)
    .addField(`**Booster Avantajları**`, `💸 | ▸Server Booster◂ Rolü Avantajları !

 <a:disco:706438922317856839>  | Sadece Boosterlere Özel 💸 | ▸Server Booster◂ Rolü Alırsınız. ( Süre : Boost Süresi Bitene Kadar )

 <a:disco:706438922317856839>  | Hesabınıza 45 Adet Davet Eklenir. ( Kalıcı )

 <a:disco:706438922317856839>  | 2x Boost Basarsanız 50 Davetlik 💎 | ▸Premium◂ Rolünü Direk Alırsınız. ( Süre : Kalıcı )

 <a:disco:706438922317856839>  | 💸 | ▸Server Booster◂ Süreniz Bittiğinde , 🔥 | ▸Özel Üye◂ Rolünü Alırsınız. ( Süre : Kalıcı )

 <a:disco:706438922317856839>  | İstediğiniz Kadar Kendi Adınızı Değiştirebilirsiniz.

 <a:disco:706438922317856839>  | Size Özel Sohbet Kanalları .

 <a:disco:706438922317856839>  | Size Özel İstek Log Kanalı.

 <a:disco:706438922317856839>  | Adınızın Yanına Booster Sembolü.

 <a:disco:706438922317856839> | Yardımlarda Öncelik.

 <a:disco:706438922317856839>  | Son Olarak , Everyone Ve Here'siz 2 Günlük Reklam !`)
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
   