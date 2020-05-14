const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! '+client.emojis.get('647760202875142154'))
  
   if(!args[0] || isNaN(args[0])) return message.channel.send(`Ayarlamam İçin Bir Sayı Yazmalısın`);
  await db.set(`rlimit31_${message.guild.id}`, args[0])
  message.reply(`Rol Hassasiyeti **${args[0]}** Rakamına Ayarlanmıştır.`);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koruma-rollimit',
  description: 'Rol limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};