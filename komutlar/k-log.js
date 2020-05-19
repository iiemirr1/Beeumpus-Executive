const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { //<3
// mete işin bittiyse kayıt sisteminin yardım menüsünü yazabilir misin?   yazarim tabii ki
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
  
  let kanal = message.mentions.channels.first()
  
  if(!kanal) return message.reply(':x: Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `!kayit-kanal-ayarla #logkanal`')
  
  message.channel.send('Kayıt log Kanalını '+kanal+' Olarak Ayarladım.')
  
  db.set(`codemingklogkanal_${message.guild.id}`, kanal.id)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal',
  description: 'taslak', 
  usage: 'kayıt-kanal'
};