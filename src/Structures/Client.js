const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');

module.exports = class DiscordBotClient extends Client {
	constructor(options = {}) {
		super({
			disableMentions: 'everyone',
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		this.utils = new Util(this);

		this.owners = []; //Put your id in here
	}

	validate(options) {
		if (typeof options !== 'object')
			throw new TypeError('Options should be a type of Object.');

		if (!options.bottoken)
			throw new Error('You must pass the token for the client.');
		this.token = options.bottoken;

		if (!options.prefix)
			throw new Error('You must pass a prefix for the client.');
		if (typeof options.prefix !== 'string')
			throw new TypeError('Prefix should be a type of String.');
		this.prefix = options.prefix;
	}

	async start(token = this.bottoken) {
		this.utils.loadCommands();
		this.utils.loadEvents();
		super.login(token);
	}
};
