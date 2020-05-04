const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '704818269336633384')
  if(message.guild.id !== '687044388559257634') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece [Kod Paylaşım](...........) sunucusunda kullanabilirsin.').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('❌ | **Html Rolün Var !**')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.sendMessage('<a:okke:706822258512887879> | **Başarılı !**\n**Html Rolü Verildi.**')
    } catch (error) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return message.channel.send('❌ | **Html Rolün Zaten Var !**')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "html",
  description: "html rolü verir.",
  usage: "html"
};