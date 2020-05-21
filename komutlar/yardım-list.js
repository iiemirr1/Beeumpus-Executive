const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('<:Simsek:712992067126820895> Yardım Kategorileri',`
**<a:disco:712995317234270298> Yetkili Komutları** : \`\Yetkili\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Sunucu Komutları** : \`\Sunucu\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Kullanıcı Komutları** : \`\Kullanıcı\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Koruma Komutları** : \`\Güvenlik\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Ekonomi Komutları** : \`\Ekonomi\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Davet Komutları** : \`\İnvite Sisteminin\`\ Komutlarını Listeler!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:Rgbsag:712244124924772373> Davet Linki](yakında)\n[<a:Rgbsag:712244124924772373> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:Rgbsag:712244124924772373> Website](yakında)")
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
  name: 'yardımlar'
};
