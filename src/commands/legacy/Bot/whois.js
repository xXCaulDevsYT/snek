module.exports = {
    name: 'whois',
    usage: 's.whois [@user]',
    ownerOnly: false,
    category: 'Bot',
    run: async(client, message, args) => {

       message.reply('Could not find that!')
 
       if (args[1] === 'snekchad') {

          let embed = new client.discord.MessageEmbed()
          .setTitle('Snek Chad : About Me')
          .setDescription('I like hanging with the bros, lifting weights, and doing manly stuff.')
          .addFields(
            { name: 'Age', value: '`21`', inline: true },
            { name: 'Birthday', value: '`August 21st`', inline: true },
            { name: 'Relationship', value: '`Weights not women!`', inline: true },
            { name: 'Hobby', value: '`Bodybuilding`', inline: true },
            { name: 'Dream', value: '`To submit to no one`', inline: true },
          )
          .setImage('https://media.discordapp.net/attachments/987451273764814858/1011739507558715482/unknown.png')

          message.reply({embeds: [infoEmbed]})
       }

    }
}
