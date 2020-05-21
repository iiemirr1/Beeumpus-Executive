const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('<:Simsek:712992067126820895> Yardım Kategorileri',`
**<a:yet:712619592937373786> Yetkili Komutları** : \`\Yetkili\`\ Komutlarını Listeler!
**<a:yet:712619592937373786> Sunucu Komutları** : \`\Sunucu\`\ Komutlarını Listeler!
**<a:yet:712619592937373786> Kullanıcı Komutları** : \`\Kullanıcı\`\ Komutlarını Listeler!
**<a:yet:712619592937373786> Koruma Komutları** : \`\Güvenlik\`\ Komutlarını Listeler!
**<a:yet:712619592937373786> Ekonomi Komutları** : \`\Ekonomi\`\ Komutlarını Listeler!
**<a:yet:712619592937373786> Davet Komutları** : \`\İnvite Sisteminin\`\ Komutlarını Listeler!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:yet:712619592937373786> Davet Linki](yakında)\n[<a:yet:712619592937373786> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:yet:712619592937373786> Website](yakında)")
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
