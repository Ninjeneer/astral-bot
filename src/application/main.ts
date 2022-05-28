import APODCommand from "./commands/apod";
import APODService from "../core/apod/adapters/apod.service";
import ApodEmbed from "./embeds/apod.embed";
import ISSCommand from "./commands/iss";
import ISSEmbed from "./embeds/iss.embed";
import ISSTrackerService from "../core/iss/adapters/iss-tracker.service";
import { Interaction } from "discord.js";
import LaunchCommand from "./commands/launches";
import LaunchData from "../core/launches/entities/launch";
import LaunchService from "../core/launches/adapters/launch.service";
import Notification from "../core/launches/entities/notification";
import { REST } from "@discordjs/rest";
import cron from 'node-cron';
import dotenv from 'dotenv';

// Require the necessary discord.js classes
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { Routes } = require('discord-api-types/v9');


dotenv.config();

export default class AstralBot {
	private readonly launchService: LaunchService;
	private readonly apodService: APODService;
	private readonly issTrackerService: ISSTrackerService;
	private client: typeof Client;

	constructor(launchService: LaunchService, apodService: APODService, issTrackerService: ISSTrackerService) {
		this.launchService = launchService;
		this.apodService = apodService;
		this.issTrackerService = issTrackerService;
		this.client = new Client({ intents: [Intents.FLAGS.GUILDS], presence: { activities: [{ name: 'les étoiles', type: 'WATCHING' }], } });
		this.client.commands = new Collection();

		// Bot commands
		this.client.commands.set('launches', new LaunchCommand(this.launchService));
		this.client.commands.set('apod', new APODCommand(this.apodService));
		this.client.commands.set('iss', new ISSCommand(this.issTrackerService));

		this.client.once('ready', this.initBot.bind(this));
		this.client.on('interactionCreate', async (message: Interaction) => await this.handleMessage(message));
	}

	public start(): void {
		// Login to Discord with your client's token
		this.client.login(process.env.TOKEN);
	}

	private initBot(): void {
		this.deployCommands();
		this.startCronTasks();

		let firstRun = true;
		setInterval(() => {
			this.launchService.fetchLaunches()
				.then((launches) => {
					if (!firstRun) {
						launches.forEach(this.notifyNewLaunch.bind(this));
						firstRun = false;
					}
				});
		}, 5 * 1000); // Check every 5 seconds

		setInterval(async () => {
			const notifications = await this.launchService.getIncomingLaunchNotifications();
			if (notifications.length > 0) {
				notifications.forEach((n) => this.notifyIncomingLaunch(n));
			}
		}, 60 * 1000); // Check every minute

		console.log('Ready!');
	}

	private async handleMessage(message: Interaction): Promise<void> {
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

	private deployCommands(): void {
		const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
		rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: this.client.commands.map(c => c.getDefinition().toJSON()) })
			.then(() => console.log('Commands deployed!'))
			.catch(console.error);
	}

	private notifyNewLaunch(launch: LaunchData): void {
		this.notify('Nouveau lancement programmé !', launch);
	}

	private notifyIncomingLaunch(notification: Notification): void {
		this.notify(`Un lancement arrive dans ${notification.hasBeenNowNotified() ? 'les prochaines minutes' : 'la prochaine heure'}`, notification.getLaunch());
	}

	private notify(message: string, launch: LaunchData): void {
		const embed = new MessageEmbed()
			.setTitle(message)
			.setDescription(this.launchService.buildLaunchDescription(launch));
		this.client.channels.fetch(process.env.CHANNEL_ID).then((c) => c.send({ embeds: [embed] }));
	}

	private startCronTasks(): void {
		// Every day at 9am
		cron.schedule('0 9 * * *', () => {
			// Send the APOD
			this.client.channels.fetch(process.env.CHANNEL_ID).then(async (c) => c.send({ embeds: [new ApodEmbed(await this.apodService.getAPOD())] }));
		}, {
			timezone: 'Europe/Paris'
		});

		// Every hour
		cron.schedule('0 * * * *', async () => {
			// Get the ISS Position
			const issPosition = await this.issTrackerService.getPosition();
			// If the ISS fly over the France, send and a notification
			if (issPosition.country === 'France') {
				this.client.channels.fetch(process.env.CHANNEL_ID).then(async (c) => c.send({ embeds: [new ISSEmbed('L\'ISS passe au dessus de la France !', issPosition)] }));
			}
		});
	}
}
