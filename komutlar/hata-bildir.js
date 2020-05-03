const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : -istekkod sayaç komutu')
const embed = new Discord.RichEmbed()
.setColor('#00ff00')
.setDescription('İstek Kodunuz başarıyla bildirildi <a:istek:706431026804818001> \nEn Yakın Zamanda #「istek-kodlara-cevap」 Kanalından Cevap Vereceğiz. <a:dikat:706431490027814914>')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **bildirisi ;**`)
.addField(`:envelope: **Gönderen Kişinin Bilgileri**`, `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen Hatalı/Buglu Kod Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('705111798742777886').send(embed2); // Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'hatalıkod',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'hatalıkod <hata>'
}