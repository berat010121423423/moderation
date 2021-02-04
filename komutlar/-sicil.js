const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const kdb = new qdb.table("kullanici");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["805738640901668892"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("VIEW_AUDIT_LOG"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:croz:806650760104247327> **Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.**`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
let uye = message.guild.member(kullanici);
let sicil = kdb.get(`kullanici.${uye.id}.sicil`) || [];
moment.locale("tr");
sicil = sicil.reverse();
let sicilPanel = sicil.length > 0 ? sicil.map((value, index) => `\`${index + 1}.\` [**${value.Ceza}**] \`${value.Tarih}\` tarihinde **${value.Sebep}** sebebinden dolayı \`${value.Süre}\` süresince ${message.guild.members.cache.has(value.Yetkili) ? message.guild.members.cache.get(value.Yetkili) : value.Yetkili} \`cezalandırıldı.\` `).join("\n\n") : "Bebek Götü Gibi Tertemiz Sicilin var Harika.";
message.react('✅')
message.channel.send(new MessageEmbed()
.setColor("RED")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`**<@!${uye.id}> İsimli Kullanıcının Sicili** \n\n ${sicilPanel}`)
.setFooter(`Artius Moderasyon`))
};

module.exports.conf = {
    guildOnly: true,
    aliases: ["sicil"],
    permLevel: 0
};

module.exports.help = {
    name: "geçmiş",
};
