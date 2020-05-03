const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`**Sunucu Kuralları**`, `

:kayt: | Argo kelimeler, küfür vb. şeyler yasaktır.
:kayt: | Rahatsız edici paylaşımlar yapmak yasaktır (Örn: +18, korku, cinsellik vs.).
:kayt: | Spam yapmak yasaktır. 
:kayt: | Reklam yapmak yasaktır.
:kayt: | Din, dil, ırk ve siyaset hakkında konuşmak yasaktır.
:kayt: | Herkes birbirine saygılı davranmalıdır.
:kayt: | Sunucu ayarları hakkında bir değişiklik istenemez.
:kayt: | Kimsenin tercihi kimseyi ilgilendirmez.
:kayt: | Tartışma çıkarmak, tartışmaya dahil olmak yasaktır.
:kayt: | Komutları Ve Kanalları Gerektiği Gibi Kullanmamak Yasaktır.
:kayt: | Başkalarını rahatsız edecek davranışlarda bulunmak yasaktır.
:kayt: | Kimse başka bir kişiye üstünlük gösteremez.
:kayt: | Aşırı derecede emoji ve büyük harf kullanımı yasaktır.
:kayt: | Ahlaka karşı davranışlar sergilemek yasaktır.
:kayt: | Başkalarını rahatsız etmek yasaktır.
:kayt: | Oynuyor.. kısmına küfür, reklam vb. içerikler yazmak yasaktır.
:kayt: | İsim başına "!" ve benzeri semboller koymak yasaktır.
:kayt: | Logları kirletecek olaylar (Odalarda hızlı gezmek vb.) yapmak yasaktır.`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kurallar',
  description: 'Booster Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'booster'
};
   