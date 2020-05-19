const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const emojiler = require('../emojiler.json')
exports.run = (client, message, args) => { 
  
    
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
  
  let codeming = args.slice(0).join(" ")
  if(codeming.length < 5) return message.channel.send(':x: Giriş Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `!giriş-sistemi Hoşgeldin -uye- Bu Kayıt Olmak İçin !kayıt İsim Yaş`')
  
  
  message.channel.send('Sunucuya Yeni Üye Katılınca '+codeming+' Kayıt Kanalına Bu Şekilde Karşılama Mesajı Atacağım.')

db.set(`codeminghgmsj_${message.guild.id}`,codeming)

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'giriş-sistemi',
  description: 'taslak', 
  usage: 'giriş-sistemi'
};