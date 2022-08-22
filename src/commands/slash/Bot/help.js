const { readdirSync } = require("fs");

// Example of how to make a Help SlashCommand

module.exports = {
    name: "help",
    usage: '/help <command>',
    options: [
        {
            name: 'command',
            description: 'What command do you need help',
            type: 'STRING',
            required: false
        }
    ],
    category: "Bot",
    description: "Return all commands, or one specific command!",
    ownerOnly: false,
    run: async (client, interaction) => {

        // Buttons that take you to a link
        // If you want to delete them, remove this part of
        // the code and in line: 62 delete ", components: [row]"
        const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                    .setLabel("GitHub")
                    .setStyle("LINK")
                    .setURL("http://github.com/xxcauldevsyt/snek"),
                new client.discord.MessageButton()
                    .setLabel("Support")
                    .setStyle("LINK")
                    .setURL("http://dsc.gg/snekboy")
            );

        const commandInt = interaction.options.getString("command");
        if (!commandInt) {

            // Get the commands of a Bot category
            const botCommandsList = [];
            readdirSync(`${client.cwd}/src/commands/slash/Bot`).forEach((file) => {
                const filen = require(`${client.cwd}/src/commands/slash/Bot/${file}`);
                const name = `\`${filen.name}\``;
                botCommandsList.push(name);
            });

            // Get the commands of a Utility category
            const utilityCommandsList = [];
            readdirSync(`${client.cwd}/src/commands/slash/Utility`).forEach((file) => {
                const filen = require(`${client.cwd}/src/commands/slash/Utility/${file}`);
                const name = `\`${filen.name}\``;
                utilityCommandsList.push(name);
            });

            // This is what it commands when using the command without arguments
            const helpEmbed = new client.discord.MessageEmbed()
                .setTitle(`Hissssss... Let me help you!`)
                .setDescription(` Hello **<@${interaction.member.id}>**, I am snek, hiss...  \nYou can use \`/help command>\` to see more info about about a certain slash command!\n**Total Commands:** ${client.commands.size}\n**Total Slash Commands:** ${client.slash.size}`)
                .addField("Default", botCommandsList.map((data) => `${data}`).join(", "), true)
                .addField("Utility", utilityCommandsList.map((data) => `${data}`).join(", "), true)
                .setColor(client.config.embedColor)
                .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

            interaction.reply({ embeds: [helpEmbed], components: [row] });
        } else {
            const command = client.slash.get(commandInt.toLowerCase());

            if (!command) {
                interaction.reply({ content: `There isnt a slash command named "${commandInt}"` });
            } else {

                let command = client.slash.get(commandInt.toLowerCase());
                let name = command.name;
                let description = command.description || "No descrpition provided"
                let usage = command.usage || "No usage provided"
                let category = command.category || "No category provided!"

                let helpCmdEmbed = new client.discord.MessageEmbed()
                    .setTitle(`${client.user.username} Help | \`${(name.toLocaleString())}\` Slash Command`)
                    .addFields(
                        { name: "Description", value: `${description}` },
                        { name: "Usage", value: `${usage}` },
                        { name: 'Category', value: `${category}` })
                    .setColor(client.config.embedColor)
                    .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

                interaction.reply({ embeds: [helpCmdEmbed] });
            }
        }
    },
};
