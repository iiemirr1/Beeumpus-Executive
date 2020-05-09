const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Premium Yardım')
    .setAuthor(`Premium`, client.user.avatarURL) 
      .setDescription('Versiyon : **v1.1**\nToplam Komut : **48** \nPrefix : **-**\nDil : **Türkçe**')
.setThumbnail(client.user.avatarURL)
      .addField('** Yetkili [13]**', '`terfi`, `ban`, `erkek`, `kadın`, `kick`, `emojiler`, `dm-hg`, `güvenlik`, `capsengel`, `ping`, `rol-bilgi`, `oylama`, `rol-koruma`')
      .addField('** Yetkili 2 [11]**', '`küfür`, `modlog`, `otorol ayarla`, `sa-as`, `reklam`, `sayaç`, `reklamtara`, `sil`, `kayıt`, `hatırlat`, `yaz`')
      .addField('** Kullanıcı [10]**', '`avatar`, `sunucubilgi`, `ping`, `havadurumu`,`top5`,`yasaklar`,`üyedurum`,`döviz`,`değişiklikler`,`saat`')
      .addField('** Kullanıcı 2 [10]**', '`hata`,`istek`,`youtube`,`servericon`,`say`,`website`,`hesapla`,`korona`,`kısalt`,`başvuru`')
      .addField('** Rol Alma [5]**', '`-js`, `-html`, `-altyapı`,`-premium`,`-booster`')
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
      description: 'Yardım kategorilerini gösterir.',
};