const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Yardım Menüsü')
    .setAuthor(`TitanX`, client.user.avatarURL) 
      .setDescription('Prefix : **t+** , Dil : **Türkçe**')
.setThumbnail(client.user.avatarURL)
      .addField('**<a:yet:712619592937373786> Yetkili Komutları**', '`terfi`, `ban`,`unban`,`kick`, `emojiler`, `yaz`, `sil`, `ping`, `rol-bilgi`, `oylama`, `hatırlat`,`süreliban`,`temizle-üye`,`çekiliş`,`kanalkilit`,`rolal`,`rolver`,`yavaşmod`')
      .addField('**<a:yet:712619592937373786> Sunucu Komutları**', '`küfür-engelle`, `otorol-ayarla`, `otorolkapat`, `otorol-mesajı`, `reklam-engel`, `reklamban`, `reklambankapat`, `reklam-taraması`, `kayıt-sistemi`, `sayaç`, `capsengel`,`sa-as`,`modlog`,`ototag`,``dm-hg``')
      .addField('**<a:yet:712619592937373786> Kullanıcı Komutları**', '`avatar`, `sunucubilgi`, `ping`, `havadurumu`,`top5`,`yasaklar`,`üyedurum`,`döviz`,`değişiklikler`,`saat`,`youtube`,`servericon`,`say`,`hesapla`,`korona`,`kısalt`,`kanalbilgi`,`istatistik`,`banner`,`canlıdestek`')
      .addField('**<a:yet:712619592937373786> Koruma Komutları**', '`rolkoruma`, `güvenlik`,`self-koruma`,`ddos-sistemi`')
      .setThumbnail(`https://cdn.discordapp.com/attachments/704396564227031130/710399250021744660/image0-1.gif`)
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