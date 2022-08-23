module.exports = {
    name: 'test',
    category: 'Bot',
    ownerOnly: false,
    run: async(client, message, args) => {
        const db = require('quick.db');
        let cu = 0;

        message.reply('Youve used, ' + `${cu}` + ' commands on snek.')
    }
}
