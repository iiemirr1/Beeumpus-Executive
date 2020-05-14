const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! '+client.emojis.get('673125251961323532'))
  
  if (!db.fetch(`klimit31_${message.guild.id}`)) return message.channel.send(`Zaten Kapalı Reis.`)
  db.delete(`klimit31_${message.guild.id}`)
  message.channel.send(`:ok_hand: Koruma Rol Sistemi Sunucunuz İçin Veritabanından Silinmiştir.`);
  }
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koruma-rollimit-sistemi-kapat',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};