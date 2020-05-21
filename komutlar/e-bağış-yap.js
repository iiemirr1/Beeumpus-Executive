const Discord = require("discord.js");
const frenzydb = require("quick.db")
exports.run = async (client, message, args) => {
let fcbakiye = await frenzydb.fetch(`Bakiye_FrenzyCode.${message.author.id}`) || 0
  
let frenzyuser = message.mentions.users.first()
let gönderilecekfc = args[1]
if(!frenzyuser) return message.reply('Bağış yapacağın kullanıcıyı etiketlemeyi unuttun!')
if(!gönderilecekfc) return message.reply('Göndereceğin parayı yazmayı unuttun!')

if(fcbakiye < gönderilecekfc) return message.reply('Paran  yetersiz sende olan '+fcbakiye)

frenzydb.add(`Bakiye_FrenzyCode.${message.author.id}`,-gönderilecekfc)
frenzydb.add(`Bakiye_FrenzyCode.${frenzyuser.id}`,gönderilecekfc)
message.channel.send(`${frenzyuser} Kullanısının bakiyesine ${gönderilecekfc} para eklendi! Sende kalan : ${fcbakiye}`)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['paragönder'],
  permLevel: 0,
}
exports.help = {
    name: 'bağışyap'
}