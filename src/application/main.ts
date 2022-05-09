import { Interaction, Message } from "discord.js";

import LaunchCommand from "./commands/launches";
import LaunchService from "../core/launches/adapters/launch.service";
import dotenv from 'dotenv';
import { startFetchDataTask } from './network'

// Require the necessary discord.js classes
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');

dotenv.config();

export default class AstralBot {
	private launchService: LaunchService;
	private client: typeof Client;

	constructor(launchService: LaunchService) {
		this.launchService = launchService;
		this.client = new Client({ intents: [Intents.FLAGS.GUILDS], presence: { activities: [{ name: 'les étoiles', type: 'WATCHING' }] } });
		this.client.commands = new Collection();
		this.client.commands.set('launches', new LaunchCommand());

		this.client.once('ready', this.initBot.bind(this));
		this.client.on('interactionCreate', async (message: Interaction) => await this.handleMessage(message));
	}

	public start(): void {
		// Login to Discord with your client's token
		this.client.login(process.env.TOKEN);
	}

	private initBot(): void {
		console.log('Ready!');

		require('./deploy-commands');

		startFetchDataTask((launch) => {
			const embed = new MessageEmbed();
			embed.setTitle('Nouveau lancement programmé !');
			embed.setDescription(launch.buildDescription());
			this.client.channels.fetch(process.env.CHANNEL_ID).then((c) => c.send({ embeds: [embed] }));
		});
	}

	private async handleMessage(message: Interaction): Promise<void> {
		console.log(message.isCommand())
		if (!message.isCommand()) return;

		const command = this.client.commands.get(message.commandName);

		if (!command) return;

		try {
			await command.execute(message);
		} catch (error) {
			console.error(error);
			await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
}
