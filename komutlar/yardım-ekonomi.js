const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
   .setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Ekonomi Komutları**',`
**:white_small_square: emoji-yakalamaca** : Puan Oyunu!
**:white_small_square: gönder** : Puan Gönderir!
**:white_small_square: günlük** : Günlük Puan Alırsın!
**:white_small_square: kumar** : Sunucudaki Emojileri Listeler!
**:white_small_square: puan** : Puanınızı Gösterir!
**:white_small_square: puan-ver** : Puan Verir (Bot Sahibi Kullanabilir)!
**:white_small_square: satın-al** : Marketten Bişey Alırsınız!(bakım şuan)
**:white_small_square: çal** : Cepcilik Yaparsınız!`)
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
  name: 'ekonomi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   