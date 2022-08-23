const Keyv = require('keyv');
const db = new Keyv(`${process.env.MONGOKEY}`);

module.exports = {
    name: 'ready',
    once: true,

    /**
     * @param {Client} client 
     */
    async execute(client) {
        
        // Puts an activity
        client.user.setActivity("You through the tall grass.", {
            type: "WATCHING",
            name: "You through the tall grass."
        });
        
        // Send a message on the console
        console.log(`[LOG] mongo database connected!`)
        console.log(`[LOG] ${client.user.tag} is now online!`);
        console.log(`[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers`);
        console.log(`[LOG] Bot serving ${client.users.cache.size} users`);
    }
}
