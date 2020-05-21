const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Sunucu Komutları**',`
**:white_small_square: otorol-ayarla** : Otorol Ayarlar!
**:white_small_square: otorol-mesajı** : Otorol Mesajını Ayarlar!
**:white_small_square: otorolkapat** : Otorolü Kapatır!
**:white_small_square: küfür-engelle** : Küfür Engel Açar!
**:white_small_square: reklam-engel** : Reklam Engel Açar!
**:white_small_square: reklamban** : Reklam Ban Sistemini Açar!
**:white_small_square: reklambankapat** : Reklam Ban Sistemini Kapat!
**:white_small_square: reklam-taraması** : Reklam Taraması Yapar!
**:white_small_square: capsengel** : Capslock Engel Açar!
**:white_small_square: kayıt-sistemi** : Kayıt Sistemini Gösterir!
**:white_small_square: sayaç** : Sayaç Sistemini Gösterir!
**:white_small_square: sa-as** : Sa-As Açar!
**:white_small_square: modlog** : Modlog Kanalını Belirler!
**:white_small_square: güvenlik** : Resimli Güvenlik!
**:white_small_square: ototag** : Ototagı Ayarlar!`)
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
  name: 'sunucu'
};
