const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Premium Yardım')
    .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
.setThumbnail(client.user.avatarURL)
      .addField('** Yetkili ()**', '`terfi`, `ban`, `erkek`, `kadın`, `kick`, `emojiler`, `roller`, `güvenlik`, `kullanıcı-bilgi`, `ping`, `rol-bilgi`, `oylama`, `sunucuresmi`')
      .addField('** Yetkili ()**', '`küfür`, `modlog`, `otorol ayarla`, `sa-as`, `reklam`, `sayaç`, `reklamtara`, `sil`, `kayıt`, `hatırlat`, `yaz`')
      .addField('** Kullanıcı ()**', '`avatar`, `sunucubilgi`, `ping`, `havadurumu`,`top5`,`yasaklar`,`üyedurum`,`döviz`,`değişiklikler`,`saat`,`youtube`,`servericon`,`say`,`website`,`hesapla`,`korona`')
      .addField('** Rol Alma ()**', '`-js`, `-html`, `-altyapı`')
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