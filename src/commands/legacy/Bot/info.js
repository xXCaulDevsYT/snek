const { readdirSync } = require("fs");

module.exports = {
    name: 'info',
    usage: 's.info',
    category: 'Bot',
    description: 'Learn more about what lies within my inner hiss of my snek body.',
    ownerOnly: false,
    run: async(client, message, args) => {

        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        let infoEmbed = new client.discord.MessageEmbed()
        .setAuthor({ name: 'Information', iconURL: client.user.displayAvatarURL() })
        .setDescription('Hisss... Hello I am snek heres some info about me.')
        .addFields(
            { name: 'Owner / Developer', value: '`Its Sorrow#9670`', inline: true },
            { name: 'Hatched On', value: '`August 21st, 2022`', inline: true },
            { name: 'Uptime', value: `**${days}d ${hours}h ${minutes}m ${seconds}s**`, inline: true },
            { name: 'Servers', value: `\`${client.guilds.cache.size}\``, inline: true },
            { name: 'Users', value: `\`${client.users.cache.size}\``, inline: true },
            { name: 'Library', value: '`discord.js`', inline: true }
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(client.config.embedColor)

        message.reply({ allowedMentions: { repliedUser: false }, embeds: [infoEmbed] });

    }
}
