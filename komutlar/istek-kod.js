const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : -istekkod sayaç komutu')
const embed = new Discord.RichEmbed()
.setColor('#ff2345')
.setDescription('🎉 **İstek Kodunuz başarıyla bildirildi!** ')
const embed2 = new Discord.RichEmbed()
.setColor("#ff2345")
.setDescription(`**${message.author.tag}** adlı kullanıcının isteği:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("İstek Kodu", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('705111758897152010').send(embed2); // Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istekkod',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek-kod <istek>'
}