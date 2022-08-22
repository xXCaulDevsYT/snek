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
        .setTitle('Hiss... Im Awake')
        .setDescription('I have been awake for\n**${days}d ${hours}h ${minutes}m ${seconds}s**')
        .setColor(clinet.config.embedColor)

        message.reply({ allowedMentions: { repliedUser: false }, embeds: [infoEmbed] });

    }
}
