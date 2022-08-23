const Keyv = require('keyv');
const db = new Keyv(`${process.env.MONGOKEY}`);

module.exports = {
    name: 'test',
    category: 'Bot',
    ownerOnly: false,
    run: async(client, message, args) => {
        let cu = await db.get(`user_${message.author.id}_commands`);

        message.reply('Youve used, ' + `${cu}` + ' commands on snek.')
    }
}
