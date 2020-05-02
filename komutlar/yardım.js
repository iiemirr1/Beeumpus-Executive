const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Premium Yardım')
    .setAuthor(`Premium`, client.user.avatarURL) 
      .setDescription('Prefix : - , Dil : Türkçe')
.setThumbnail(client.user.avatarURL)
      .addField('** Yetkili [13]**', '`terfi`, `ban`, `erkek`, `kadın`, `kick`, `emojiler`, `dm-hg`, `güvenlik`, `capsengel`, `ping`, `rol-bilgi`, `oylama`, `rol-koruma`')
      .addField('** Yetkili [11]**', '`küfür`, `modlog`, `otorol ayarla`, `sa-as`, `reklam`, `sayaç`, `reklamtara`, `sil`, `kayıt`, `hatırlat`, `yaz`')
      .addField('** Kullanıcı [17]**', '`avatar`, `sunucubilgi`, `ping`, `havadurumu`,`top5`,`yasaklar`,`üyedurum`,`döviz`,`değişiklikler`,`saat`,`youtube`,`servericon`,`say`,`website`,`hesapla`,`korona`,`kısalt`')
      .addField('** Rol Alma [3]**', '`-js`, `-html`, `-altyapı`')
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