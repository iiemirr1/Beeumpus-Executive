const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Yardım Kategorileri**',`
**<a:disco:712995317234270298> Yetkili Komutları** : \`\yetkili\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Sunucu Komutları** : \`\sunucu\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Kullanıcı Komutları** : \`\kullanıcı\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Koruma Komutları** : \`\koruma\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Kayıt-sistemi Komutları** : \`\kayıt\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Ekonomi Komutları** : \`\ekonomi\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Davet Komutları** : \`\invite\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Müzik Komutları** : \`\müzik\`\ Komutlarını Listeler!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "<a:Rgbsag:712244124924772373> [Davet Linki](https://discord.gg/Bhn7nde)\n<a:Rgbsag:712244124924772373> [Destek Sunucu](https://discord.gg/Bhn7nde)\n<a:Rgbsag:712244124924772373> [Website](https://discord.gg/Bhn7nde)")
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
