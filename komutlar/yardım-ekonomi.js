const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Yetkili Komutları**',`
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
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'ekonomi'
};
