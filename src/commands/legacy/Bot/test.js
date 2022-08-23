module.exports = {
    name: 'test',
    category: 'Bot',
    ownerOnly: false,
    run: async(client, message, args) => {
        const db = require('quick.db');
        let cu = await db.get(`user_${message.author.id}_commands`);

        message.reply('Youve used, ' + `${cu}` + ' commands on snek.')
    }
}
