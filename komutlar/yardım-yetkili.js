const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('<:Simsek:712992067126820895> Yetkili Komutları',`
**<a:disco:712995317234270298> ban** : Kullanıcıyı Sunucudan Yasaklar!
**<a:disco:712995317234270298> unban** : Kullanıcının Yasağını Kaldırır!
**<a:disco:712995317234270298> kick** :  Kullanıcıyı Sunucudan Kickler!
**<a:disco:712995317234270298> emojiler** : Sunucudaki Emojileri Listeler!
**<a:disco:712995317234270298> yaz** : Bota Yazı Yazdırır!
**<a:disco:712995317234270298> sil** :  Belirtilen Mesaj Sayısı Kadar Mesaj Siler!
**<a:disco:712995317234270298> ping** :  Botun Pingini Gösterir!
**<a:disco:712995317234270298> rolbilgi** :  Belirtilen Rolün Bilgilerini Gösterir!
**<a:disco:712995317234270298> oylama** :  Oylama Yapar!
**<a:disco:712995317234270298> hatırlat** :  Hatırlatma Mesajı Yollar!
**<a:disco:712995317234270298> süreliban** :  Süreli Olarak Ban Atar!
**<a:disco:712995317234270298> temizle-üye** :  Belirtilen Kişinin Mesajlarını Siler!
**<a:disco:712995317234270298> temizle-üye** :  Belirtilen Kişinin Mesajlarını Siler!
**<a:disco:712995317234270298> temizle-üye** :  Belirtilen Kişinin Mesajlarını Siler!
**<a:disco:712995317234270298> temizle-üye** :  Belirtilen Kişinin Mesajlarını Siler!
**<a:disco:712995317234270298> temizle-üye** :  Belirtilen Kişinin Mesajlarını Siler!`)
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
  name: 'yetkili'
};
