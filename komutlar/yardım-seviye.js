const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Kullanıcı Komutları**',`
**:white_small_square: seviye** : Seviyenizi Gösterir!
**:white_small_square: seviye-ayarlar** : Seviye komutlarının Ayarlarını Gösterir!
**:white_small_square: seviye-aç** : Seviye Sistemini Açar!
**:white_small_square: seviye-kapat** : Seviye Sistemini Kapatır!
**:white_small_square: seviye-log** : Seviye Log Kanalını Ayarlar!
**:white_small_square: seviye-rol** : Seviye Ödülünü Ayarlar!
**:white_small_square: seviye-xp** : Mesaj Başına Verilen Xpyi Ayarlar!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:Rgbsag:712244124924772373> Davet Linki](yakında)\n[<a:Rgbsag:712244124924772373> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:Rgbsag:712244124924772373> Website](yakında)")
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sevsis',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   