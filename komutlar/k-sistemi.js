const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const emojiler = require('../emojiler.json')
exports.run = (client, message, args) => { //<3
// mete işin bittiyse kayıt sisteminin yardım menüsünü yazabilir misin?   yazarim tabii ki
   let yasin = new Discord.RichEmbed()
   .setAuthor( client.user.username, client.user.avatarURL )
   .setFooter( client.user.username, client.user.avatarURL )
   .setDescription(' **Kayıt Sistemi Kullanımı** \n\n • `!kayit-kanal-ayarla #kanal` 》 \n Üyelerin Kayıt Olacağı Kanal \n\n • `!kanal-ayarla #kanal` 》 \n Üyeler Kayıt Olunca Bildirim Gidecek Kanal \n\n • `!isim-sistemi -uye- -yas-` 》 \n Üye İsim Sistemi Özgürce Yerleştirilen Değişkenler -uye- -yas- Yaş Seçeneği Eklemezseniz Yaş Sormayacaktır. \n\n • `!kayıt-verilecek-rol-ayarla @rol` 》 \n Kayıt Olan Kişiye Verilecek Rol \n\n • `!kayıt-alınacak-rol-ayarla @rol` 》 \n Kayıt Olan Kişiden Alınacak Rol \n\n • `!kayıt-sistemi-kapat` 》 \n Kayıt Sistemini Kapatır Ve Verileri Siler \n\n • `!giriş-sistemi Hoşgeldin -uye- Kayıt Olabilmek İçin !kayıt Mahmut 18` 》 \n Giriş Sistemini Özgürce Editleyebilirsiniz Değişkenler -uye- -uyetag- ')
 message.channel.send(yasin)




}

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'taslak', 
  usage: 'kayıt-sistemi'
};