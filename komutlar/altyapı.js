const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', 'rol id')
  if(message.guild.id !== 'sunucu id') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece [Kod Paylaşım](...........) sunucusunda kullanabilirsin.').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('❌ | **Altyapı Rolün Var !**')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.sendMessage('<a:okke:706822258512887879> | **Başarılı !**\n**Altyapı Rolü Verildi.**')
    } catch (error) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return message.channel.send('❌ | **Altyapı Rolün Zaten Var !**')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "altyapı",
  description: "altyapı rolü verir.",
  usage: "altyapı"
};