const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setDescription("**:tik: Işte Sitem [TIKLA](https://rixnuxbin.glitch.me)**")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site'],
permLevel: 0
}

exports.help = {
name: 'website',

}
 