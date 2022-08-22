module.exports = {
    name: 'message',
    run: async(message, client) => {
        if(message.channel.id === '1011138124723802132') {
        message.channel.startTyping();
fetch(`http://api.brainshop.ai/get?bid=168734&key=pT7Dflc5r4hPfnA1&uid=${uid}&msg=${msg}`)
    .then(res => res.json())
    .then(data => {
        message.reply(`${data.cnt}`);
    });
      message.channel.stopTyping();
    }
}
