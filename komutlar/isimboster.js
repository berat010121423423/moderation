const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
let booster = message.guild.roles.cache.get("756107569923227689")
if(!booster) return message.channel.send("Böyle Bir rol Bulanamadı!")
  if(!message.member.roles.cache.has(booster.id)) return message.reply("<a:croz:806650760104247327> **Bu Komutu Kullanabilmek İçin Boost Basman Gerek.**").then(codework => codework.delete({timeout: 5000}))

let tag = ayarlar.tag || ' '
let isim = args.slice(0).join(' ');
if(!isim) return message.reply(`**Lütfen Yeni Kullanıcı İsminizi Belirtiniz.<a:Cros:788055287768678421>**`)
if(isim.length > 32) return message.reply(`**Lütfen **32** Karakteri Geçmeyen Bir İsim Giriniz.**<a:Cros:788055287768678421>`)
  
message.guild.members.cache.get(message.author.id) .setNickname(`${tag} ${isim}`)
message.channel.send(`<a:tick:792336214694166569>Kullanıcı ismin \`${isim}\` olarak değiştirildi.<a:tick:792336214694166569>`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['booster',"rich"],
    permLevel: 0
}

exports.help = {
    name: 'isimdeğiştir',
    description: 'boosterlerın isim değiştirmesini sağlar',
    usage: 'isimdeğiştir <kullanıcı adı>'
}