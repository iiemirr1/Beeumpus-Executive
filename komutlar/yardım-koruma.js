const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Güvenlik Komutları**',`
**:white_small_square: rol-koruma** : Rolleri Korur!
**:white_small_square: self-koruma** : Self Botları Susturur!
**:white_small_square: ddos-sistemi** : ddos Koruma Sistemini Aktif Eder!
**:white_small_square: sağtıkban** : Sağtık Ban Korumasını Aktif Eder!
**:white_small_square: kanal-koruma** : Kanalları Korur!
**:white_small_square: anti-raid** : Sunucuya Eklenen Botları Kickler!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:Rgbsag:712244124924772373> Davet Linki](yakında)\n[<a:Rgbsag:712244124924772373> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:Rgbsag:712244124924772373> Website](yakında)")
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'koruma',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   