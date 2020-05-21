const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Yetkili Komutları**',`
**:white_small_square: davet-kanal** : Puan Oyunu!
**:white_small_square: davetler** : Puan Gönderir!
**:white_small_square: davetsayısı** : Sunucuda Kaç Davet Linki Aktif Onu G!
**:white_small_square: davet-sıralaması** : Davet Sıralamasını Gösterir!
**:white_small_square: rütbe-ekle** : Rütbe Eklersiniz!
**:white_small_square: rütbe-liste** : Eklenen Rütbeleri Gösterir!
**:white_small_square: rütbe-sil** : Eklediğiniz Rütbeyi Silersiniz!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:Rgbsag:712244124924772373> Davet Linki](yakında)\n[<a:Rgbsag:712244124924772373> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:Rgbsag:712244124924772373> Website](yakında)")
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'invite'
};
