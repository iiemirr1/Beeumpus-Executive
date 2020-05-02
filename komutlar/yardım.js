const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Premium Yardım')
    .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
.setThumbnail(client.user.avatarURL)
      .addField('** Yetkili ()**', '`davet`, `istatistik`, `sor`, `afk`, `avatar`, `emojiler`, `roller`, `jumbo`, `kullanıcı-bilgi`, `ping`, `rol-bilgi`, `sunucu`, `sunucuresmi`')
      .addField('** Yetkili ()**', '`küfür`, `modlog`, `otorol`, `otoselam`, `reklam`, `sayaç`, `sil-üye`, `sil`, `vkanal`, `yasakla`, `yaz`')
      .addField('** Kullanıcı ()**', '`avatar`, `kara`, `eval`, `reboot`,``,``,``,``,``,')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};


exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};