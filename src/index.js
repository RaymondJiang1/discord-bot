const DiscordBotClient = require('./Structures/Client');
const config = require('../config.json');

const client = new DiscordBotClient(config);
client.start();
