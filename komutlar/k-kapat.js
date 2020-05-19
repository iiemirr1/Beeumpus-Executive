const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
  
  let veri = await db.fetch(`codemingkkanal_${message.guild.id}`)
  if(!veri) return message.channel.send('Görünüşe Göre Kayıt Sistemi Zaten Kapalı Görünüyor :).')
  
  
  message.channel.send('Kayıt Sistemi Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
  db.delete(`codeminghgmsj_${message.guild.id}`)
  db.delete(`codemingkalınacakrol_${message.guild.id}`)  
db.delete(`codemingkisim_${message.guild.id}`)
db.delete(`codemingkkanal_${message.guild.id}`)
  db.delete(`codemingklogkanal_${message.guild.id}`)
  db.delete(`codemingkverilecekrol_${message.guild.id}`)  
  // delete yapsana kanka
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-sistemi-kapat',
  description: 'taslak', 
  usage: 'kayıt-sistemi-kapat'
};