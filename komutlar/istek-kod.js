const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım: !istek-kod Bence bunu bunu eklerseniz daha iyi olur')
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('🎉 **İstek Kodunuz başarıyla bildirildi!** ')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının isteği:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("İstek Kodu", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('662331853943996446').send(embed2); // Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek-kod',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek-kod <istek>'
}