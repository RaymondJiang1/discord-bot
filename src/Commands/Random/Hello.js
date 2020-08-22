const Command = require('../../Structures/Command.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			aliases: ['hallo', 'hi'],
			description: 'Has the bot say hello to you!',
			category: 'random',
		});
	}

	async run(message, args) {
		message.channel.send('Hello!');
	}
};
