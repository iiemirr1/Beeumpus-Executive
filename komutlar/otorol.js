const discord = require('discord.js')
const db = require('quick.db');
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olmanız gereklidir.')
 
if (args[0] == 'ayarla') {
   var rol1;
  var rol2;
let anarol= message.mentions.roles.first() || message.guild.roles.get(args.join(' '));
 
  if (!anarol) return message.channel.send( ' Sunucuya katılan üyelere vereceğim rolü etiketlemelisiniz. Kullanım: `!otorol ayarla @Rol #kanal`')
  else rol1 = message.mentions.roles.first().id
 
      let otorolismi = message.mentions.roles.first().name  
  let kanal = message.mentions.channels.first();
  
  if (!kanal) return message.channel.send( 'Lütfen bilgilendirme mesajlarını atacağım yeri belirtiniz. Doğru kullanım: `!otorol ayarla @Rol #kanal`')
    
  db.set(`otorolIsmi_${message.guild.id}`, otorolismi)
  
  let logkanali = await  db.set(`otorolkanali_${message.guild.id}`, message.mentions.channels.first().id)
  
  let otorol = await db.set(`otorol_${message.guild.id}`, rol1)
  
  if (!message.guild.roles.get(rol1)) return message.channel.send("Etiketlediğiniz rol bulunamadı. Rolün etiketlenebilir olduğundan emin olmalısınız.")
    message.channel.send(`Sunucuya yeni katılanlara verilecek rol \`${otorolismi}\` olarak ayarlandı.\n Bilgilendirme kanalı ise  olarak ayarlandı.`)  
     
  } 
  if (args[0] == 'kapat') {
    
db.delete(`otorolIsmi_${message.guild.id}`)
        db.delete(`otorolkanali_${message.guild.id}`)
    db.delete(`otorol_${message.guild.id}`)
    message.channel.send(`Otorol sistemi başarıyla kapatıldı.`)
  }
};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["oto-rol"],
    permLevel: 0
}
exports.help = {
    name: 'otorol',
    description: 'Sunucuya katılanlara belirtilen rolü verir.',
    usage: 'otorol'
}