module.exports = {
    name: 'messageCreate',

    /**
     * @param {Message} message 
     * @param {Client} client 
     */
    async execute(message, client) {
        if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(client.config.botPrefix)) return;
        const [cmd, ...args] = message.content.slice(client.config.botPrefix.length).trim().split(" ");
        const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
        
        if (!command) return;
        
        if (command.ownerOnly) {
            if (message.author.id !== client.config.ownerID) {
                return message.reply({ content: "This command only for Bot Owner!", allowedMentions: { repliedUser: false } });
            }
        }
        
        await command.run(client, message, args);
        
        if (message.content.startsWith('<@1011082761093787758>') || message.content.startsWith('<@!1011082761093787758>')) {

            if (message.content.includes('hi' || 'hello' || 'hey' || 'sup' || 'wassup')) {
                return message.reply('Hello!')
            }

        }
    }
}
