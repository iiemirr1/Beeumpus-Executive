const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const emojiler = require('../emojiler.json')
exports.run = (client, message, args) => { 
  
    
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
  
  let codeming = args.slice(0).join(" ")
  if(codeming.length < 5) return message.channel.send(':x: İsim Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `!isim-sistemi [-uye-]|[-yas-]`')
  
  
  message.channel.send('Kayıt Olan Kullanıcıların İsimlerini '+codeming+' Bu Şekle Göre Düzenleyeceğim.')

db.set(`codemingkisim_${message.guild.id}`,codeming)

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isim-sistemi',
  description: 'taslak', 
  usage: 'isim-sistemi'
};