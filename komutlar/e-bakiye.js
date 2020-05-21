const Discord = require("discord.js");
const frenzydb = require("quick.db")
exports.run = async (client, message, args) => {

let frenzyuser = message.mentions.users.first() || message.author

let fcbakiye = await frenzydb.fetch(`Bakiye_FrenzyCode.${frenzyuser.id}`) || 0

message.channel.send(`${frenzyuser} Kullanısının bakiyesi ${fcbakiye}`)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['para'],
  permLevel: 0,
}
exports.help = {
    name: 'bakiye'
}