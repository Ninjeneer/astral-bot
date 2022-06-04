import { Message, MessageEmbed } from "discord.js";

import Command from "./commands";
import LaunchService from "../../../core/launches/adapters/launch.service";
import { SlashCommandBuilder } from '@discordjs/builders';

export default class LaunchCommand extends Command {
	private launchService: LaunchService;

	constructor(launchService: LaunchService) {
		super(new SlashCommandBuilder()
			.setName('launches')
			.setDescription('Affiche la liste des prochains lancements'))
		this.launchService = launchService;
	}

	async execute(interaction: Message): Promise<void> {
		const launches = await this.launchService.getLaunches();

		const embed = new MessageEmbed();
		embed.setTitle('Liste des prochains lancements :');
		// Build text
		let description = `Voici la liste des ${launches.length} prochains lancements\n\n`;
		for (const launch of launches) {
			description += this.launchService.buildLaunchDescription(launch);
			description += "\n\n";
		}
		embed.setDescription(description);
		await interaction.reply({ embeds: [embed] })
	}
}

