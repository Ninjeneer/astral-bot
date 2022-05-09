import { Interaction, Message, MessageEmbed } from "discord.js";

import Command from "./commands";
import { SlashCommandBuilder } from '@discordjs/builders';
import { getLaunches } from "../network";

export default class LaunchCommand extends Command {
	constructor() {
		super(new SlashCommandBuilder()
			.setName('launches')
			.setDescription('Affiche la liste des prochains lancements'))
	}

	async execute(interaction: Message): Promise<void> {
		const launches = await getLaunches();

		const embed = new MessageEmbed();
		embed.setTitle('Liste des prochains lancements :');
		// Build text
		let description = `Voici la liste des ${launches.length} prochains lancements\n\n`;
		for (const launch of launches) {
			description += launch.buildDescription();
			description += "\n\n";
		}
		embed.setDescription(description);
		// console.log(launches);

		await interaction.reply({ embeds: [embed] })
}
}

