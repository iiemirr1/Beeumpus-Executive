const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Kullanıcı Komutları**',`
**:white_small_square: avatar** : Avatarını Gösterir!
**:white_small_square: sunucubilgi** : Sunucu Bilgilerini Gösterir!
**:white_small_square: havadurumu** : HavaDurumunu Gösterir!
**:white_small_square: yasaklar** : Yasaklı Kişileri Gösterir!
**:white_small_square: üyedurum** : Üye Durum Gösterir!
**:white_small_square: döviz** : Döviz Kurlarını Gösterir!
**:white_small_square: saat** : Saati Gösterir!
**:white_small_square: youtube** : Aradığınızı Bulur!
**:white_small_square: servericon** : Sunucu Resmini Gösterir!
**:white_small_square: say** : Üyelerin Sayısal Durumu!
**:white_small_square: hesapla** : Toplama Yapar!
**:white_small_square: kısalt** : Link Kısaltır!
**:white_small_square: banner** : Yazınızı Banner Yapar!
**:white_small_square: korona** : Korona Durumunu Gösterir!
**:white_small_square: kanalbilgi** : Kanalın Bilgisini Gösterir!
**:white_small_square: istatistik** : Bot İstatistiklerini Gösterir!
**:white_small_square: canlıdestek** : Canlı Destek Açarsınız!`)
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
  name: 'kullanıcı',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   