const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Yardım Menüsü')
    .setAuthor(`TitanX`, client.user.avatarURL) 
      .setDescription('Prefix : **t+** , Dil : **Türkçe**')
.setThumbnail(client.user.avatarURL)
      .addField('** Yetkili [13]**', '`terfi`, `ban`,`unban`,`kick`, `emojiler`, `dm-hg`, `yaz`, `sil`, `ping`, `rol-bilgi`, `oylama`, `hatırlat`,`süreliban`,`temizle-üye`,`çekiliş`,`kayıt-sistemi`')
      .addField('** Sunucu [15]**', '`küfür-engelle`, `otorol-ayarla`, `otorolkapat`, `otorol-mesajı`, `reklam-engel`, `reklamban`, `reklambankapat`, `reklam-taraması`, `kayıt`, `sayaç`, `güvenlik`,`rolkoruma`,`capsengel`,`sa-as`,`modlog`')
      .addField('** Kullanıcı [10]**', '`avatar`, `sunucubilgi`, `ping`, `havadurumu`,`top5`,`yasaklar`,`üyedurum`,`döviz`,`değişiklikler`,`saat`,`youtube`,`servericon`,`say`,`hesapla`,`korona`,`kısalt`')
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