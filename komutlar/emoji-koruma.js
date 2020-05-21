const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)//Değiştirilebilir
  if (!args[0]) return message.channel.send(`Hatalı Kullanım >> Örnek Kullanım ;  \`${prefix}emoji-koruma <aç/kapat>\``)
  

  if (args[0] == 'aç') { 
        if (db.fetch(`emojikoruma_${message.guild.id}`) === true) return message.channel.send('Dostum Sistem Daha Önceden Açılmış  ')
    db.set(`emojikoruma_${message.guild.id}`, true)
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Emoji Koruma Sistemi Başarıyla Açıldı ').setColor("RANDOM")); 
     message.react('638612513428209664')
  };
  if (args[0] == 'kapat') {
       if (db.fetch(`emojikoruma_${message.guild.id}`) === false) return message.channel.send('Dostum Sistem Zaten Kapalı ')
    db.set(`emojikoruma_${message.guild.id}`, false)
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Emoji Koruma Sistemi Başarıyla Kapatıldı').setColor("RANDOM"));
     message.react('638612513428209664')
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Shi',"emoji-koruma"],
  permLevel: 0,
    kategori:'moderasyon'
};

exports.help = {
  name: 'emojikoruma'
};