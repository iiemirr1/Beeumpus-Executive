const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('Yardım Kategorileri',`
**Yetkili Komutları** : \`\Yetkili\`\ Komutlarını Listeler!
**Sunucu Komutları** : \`\Sunucu\`\ Komutlarını Listeler!
**Kullanıcı Komutları** : \`\Kullanıcı\`\ Komutlarını Listeler!
**Koruma Komutları** : \`\Güvenlik\`\ Komutlarını Listeler!
**Ekonomi Komutları** : \`\Ekonomi\`\ Komutlarını Listeler!
**Davet Komutları** : \`\İnvite Sisteminin\`\ Komutlarını Listeler!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField('Linkler:',`[Website](https://) | [Destek Sunucumuz](DETEK SUNUCU LİNKİ) | [Oy Ver](OY VERME LİNKİ)`)
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
