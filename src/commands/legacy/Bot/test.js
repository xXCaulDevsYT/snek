const { Database } = require('quickmongo');
const db = new Database(process.env.MONGOKEY)

module.exports = {
    name: 'test',
    category: 'Bot',
    ownerOnly: false,
    run: async(client, message, args) => {
        let cu = await db.fetch(`user_${message.author.id}_commands`);

        message.reply('Youve used, ' + `${cu}` + ' commands on snek.')
    }
}
