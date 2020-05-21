const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Yardım Menüsü')
    .setAuthor(`TitanX`, client.user.avatarURL) 
      .setDescription('Prefix : **t+** , Dil : **Türkçe**')
.setThumbnail(client.user.avatarURL)
      .addField('**<a:yet:712619592937373786> Yetkili Komutları**', '`terfi`<:izgi:712627344472539186> `ban`<:izgi:712627344472539186>`unban`<:izgi:712627344472539186>`kick`<:izgi:712627344472539186> `emojiler`<:izgi:712627344472539186> `yaz`<:izgi:712627344472539186> `sil`<:izgi:712627344472539186> `ping`<:izgi:712627344472539186> `rol-bilgi`<:izgi:712627344472539186> `oylama`<:izgi:712627344472539186> `hatırlat`<:izgi:712627344472539186>`süreliban`<:izgi:712627344472539186>`temizle-üye`<:izgi:712627344472539186>`çekiliş`<:izgi:712627344472539186>`kanalkilit`<:izgi:712627344472539186>`rolal`<:izgi:712627344472539186>`rolver`<:izgi:712627344472539186>`yavaşmod`')
      .addField('**<a:yet:712619592937373786> Sunucu Komutları**', '`küfür-engelle`<:izgi:712627344472539186> `otorol-ayarla`<:izgi:712627344472539186> `otorolkapat`<:izgi:712627344472539186>\n `otorol-mesajı`<:izgi:712627344472539186> `reklam-engel`<:izgi:712627344472539186> `reklamban`<:izgi:712627344472539186> `reklambankapat`<:izgi:712627344472539186> `reklam-taraması`<:izgi:712627344472539186> `kayıt-sistemi`\n `sayaç`<:izgi:712627344472539186> `capsengel`<:izgi:712627344472539186>`sa-as`<:izgi:712627344472539186>`modlog`<:izgi:712627344472539186>`ototag`<:izgi:712627344472539186>``dm-hg``')
      .addField('**<a:yet:712619592937373786> Kullanıcı Komutları**', '`avatar`<:izgi:712627344472539186> `sunucubilgi`<:izgi:712627344472539186> `ping`<:izgi:712627344472539186> `havadurumu`<:izgi:712627344472539186>`top5`<:izgi:712627344472539186>`yasaklar`<:izgi:712627344472539186>`üyedurum`<:izgi:712627344472539186>`döviz`<:izgi:712627344472539186>`değişiklikler`<:izgi:712627344472539186>`saat`<:izgi:712627344472539186>`youtube`<:izgi:712627344472539186>`servericon`<:izgi:712627344472539186>`say`<:izgi:712627344472539186>`hesapla`<:izgi:712627344472539186>`korona`<:izgi:712627344472539186>`kısalt`<:izgi:712627344472539186>`kanalbilgi`<:izgi:712627344472539186>`istatistik`<:izgi:712627344472539186>`banner`<:izgi:712627344472539186>`canlıdestek`')
      .addField('**<a:yet:712619592937373786> Koruma Komutları**', '`rol-koruma`<:izgi:712627344472539186> `güvenlik`<:izgi:712627344472539186>`self-koruma`<:izgi:712627344472539186>`ddos-sistemi`\n`sağtıkban`<:izgi:712627344472539186>`kanal-koruma`')
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