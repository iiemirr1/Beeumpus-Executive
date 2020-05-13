const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

let ID1 = ""//Alınacak 1 inci Rol ID
let ID2 = ""//Alınacak 2 inci Rol ID
let ID3 = ""//Alınacak 3 inci Rol ID
let ID4 = ""//Alınacak 4 inci Rol ID
let ID5 = ""//Alınacak 5 inci Rol ID
var mutelirolu = "Susturulmuş" //MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("<a:Cross2:689944373617492100> Komudu Kullanmak İçin Kick Members Yetkisine Sahip Olmalısın.")
  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(mutekisi.hasPermission("ADMINISTRATOR")) return message.reply(`<a:hata3:689944340306591880> **Yönetici** Yetkisine Sahip Birisini Susturamazsın!`)
  if(!mutekisi) return message.reply(`<a:hata3:689944340306591880> Susturacağınız Kişiyi Etiketleyiniz!`)
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`<a:hata3:689944340306591880> Lütfen Geçerli Bir Zaman Giriniz!`)

  await(mutekisi.addRole(muterol.id));
await(mutekisi.removeRole(ID1));
await(mutekisi.removeRole(ID2));
await(mutekisi.removeRole(ID3));
await(mutekisi.removeRole(ID4));
await(mutekisi.removeRole(ID5));
  message.reply(`<@${mutekisi.id}> Adlı Kullanıcı <@${message.author.id}> Tarafından **${args[1]}** Süre Boyunca Susturuldu!`)

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<@${mutekisi.id}> Adlı Kullanıcının **${args[1]}** Süresi Bitti Ve Susturulması Kaldırıldı!`);
  }, ms(mutezaman));
}



exports.conf = {
    aliases: ['mutele', 'sus', 'sustur'],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "mute [kullanıcı] [sebep]"
}