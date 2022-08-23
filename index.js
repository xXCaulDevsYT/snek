console.clear();
console.debug(`Booting up…`);

const Discord = require('discord.js');
const { Client, Collection, Intents } = Discord;
const handler = require("./src/handlers/index");
const fetch = require("node-fetch");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
});

// Chatbot connection
client.on('messageCreate', async (message) => {
    
    let uid = message.author.id;
    let msg = message.content;

    if(message.channel.id === '1011138124723802132') {
        if (uid === '879348852333879326') {
            return message.reply('Fuck you nerd.')
        }

        if (message.author.bot) return;
fetch(`http://api.brainshop.ai/get?bid=168734&key=${process.env.SNEKAPI}=${uid}&msg=${msg}`)
    .then(res => res.json())
    .then(data => {
        return message.reply(`${data.cnt}`);
    });
    }
});

// Call .env file to get Token
require('dotenv').config();

// Global Variables
client.discord  = Discord;
client.commands = new Collection();
client.slash    = new Collection();
client.config   = require('./config');
client.cwd      = require('process').cwd(); // require('path').resolve(``);

module.exports = client;

// Records commands and events
handler.loadEvents(client);
handler.loadCommands(client);
handler.loadSlashCommands(client);

// Error Handling
process.on("uncaughtException", (err) => {
    console.error('Uncaught Exception:', err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("[FATAL] Possibly Unhandled Rejection at: Promise", promise, "\nreason:", reason.message);
});

// Login Discord Bot Token
client.login(process.env.TOKEN);
