const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
const moment = require('moment')

module.exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!['805738640901668888'].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("VIEW_AUDIT_LOG"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:croz:806650760104247327> **Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.**`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 
const mutelog = message.guild.channels.cache.find(c => c.id === '805738644710359064')//Mute logu
const muterol = message.guild.roles.cache.find(r => r.id === '805738640864837642')//Muteli rolü

//-------------------------------------------------------------------------------\\


let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`${message.author}, lütfen bir kullanıcı etiketle !`))
  
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor('0x800d0d').setDescription(`${message.author}, lütfen mute atmam gereken kullanıcı belirt !`);
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
{
        return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda.`));
} else {
let sebep = args[1]
if(!sebep) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Lütfen Bir sebep belirtiniz.`))  
  
let zaman1 = args[1]
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
//
var vakit = zaman1
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");  
  
let tumaylar = {
"01": "Ocak",  
"02": "Şubat", 
"03": "Mart",  
"04": "Nisan",  
"05": "Mayıs", 
"06": "Haziran", 
"07": "Temmuz",
"08": "Ağustos", 
"09": "Eylül", 
"10": "Ekim", 
"11": "Kasım", 
"12": "Aralık", 
}
let aylar = tumaylar; 
       {
message.react('✅')
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`${message.author} tarafından ${member} **${sebep}** sebebiyle mute kaldırıldı`));
mutelog.send(
new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
.setColor('009caf')
.setDescription(`
<@${member.id}> (\`${member.id}\`) Metin Kanallarına Yazılış Engeli Kaldırıldı.
Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
**Süre:** \`${vakit}\`
**Sebep:** \`${sebep}\`
**Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\`)

`))
mute.roles.remove(muterol)
message.react('✅')
} 


      }}}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute"],
  permLevel: 0,
  name: "unmute"
}

exports.help = {
  name: "unmute"
};

