const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
let codeming = message.mentions.roles.fist()
  
if(!codeming) return message.channel.send(':x: Selam Kayıt Tamamlandığı Zaman alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: `!kayit-alınacak-rol-ayarla @kayıtsız` ')
 
message.channel.send('Kayıt Olan alınacak Verilecek Otomatik Rol '+codeming+' Şeklinde Ayarlandı.')  
  
db.set(`codemingkalınacakrol_${message.guild.id}`, codeming.id)  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayit-alınacak-rol-ayarla',
  description: 'taslak', 
  usage: 'kayit-alınacak-rol-ayarla'
};