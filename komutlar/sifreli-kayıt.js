const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
db.var(`kod_${message.author.id}`).then(kod => {
  if(args[0] !== kod) return message.reply("Hata! Kodunu Kontrol Et").then(msg => msg.delete(10000))
  else {
  message.delete()
  var codeworkal = message.guild.roles.get('Rol İd');   //alınacak rol id
      
  var codeworkver = message.guild.roles.get('Rol İd');   //verilecek rol id
      
  message.member.removeRole(codeworkal);   
      
  message.member.addRole(codeworkver);  
    
   message.channel.send("Kayıt Oldun").then(msg => msg.delete(10000))
    
  db.delete(`kod_${message.author.id}`)
  }

})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıtonay',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıtonay'
};