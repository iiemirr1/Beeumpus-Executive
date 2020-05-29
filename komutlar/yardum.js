const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .addField(`**<:Simsek:712992067126820895> Yardım Kategorileri**\n`, `
**<a:disco:712995317234270298> Yetkili Komutları** : \`\yetkili\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Sunucu Komutları** : \`\sunucu\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Kullanıcı Komutları** : \`\kullanıcı\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Koruma Komutları** : \`\koruma\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Kayıt-sistemi Komutları** : \`\kayıt\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Ekonomi Komutları** : \`\ekonomi\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Davet Komutları** : \`\invite\`\ Komutlarını Listeler!
**<a:disco:712995317234270298> Müzik Komutları** : \`\müzik\`\ Komutlarını Listeler!`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'booster',
  description: 'Booster Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'booster'
};
   