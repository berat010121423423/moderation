const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let kişi = message.mentions.members.first()
  let rol = ayarlar.vipROL
  
  if(![].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("VIEW_AUDIT_LOG"))) 
    return message.reply("<a:croz:806650760104247327> **Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.**");    
  
  if(!kişi) return message.channel.send('Special vereceğin kişiyi etiketlemelisin.')
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  kişi.roles.add(role);
  message.channel.send(`**${kişi.user.tag}** adlı kullanıcıya Special rolü verildi.`).then(m =>m.delete({timeout : '4000'}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-ver','vip ver'],
  permLevel: 0
};

exports.help = {
  name: 'vipver'
};