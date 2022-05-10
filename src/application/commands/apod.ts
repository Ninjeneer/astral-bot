import { Interaction, Message, MessageEmbed } from "discord.js";

import APODService from "../../core/apod/adapters/apod.service";
import ApodEmbed from "../embeds/apod.embed";
import Command from "./commands";
import { SlashCommandBuilder } from '@discordjs/builders';

export default class APODCommand extends Command {
	private apodService: APODService;

	constructor(apodService: APODService) {
		super(new SlashCommandBuilder()
			.setName('apod')
			.setDescription('Affiche l\'astrophoto de la journée (NASA)'))
		this.apodService = apodService;
	}

	async execute(interaction: Message): Promise<void> {
		const apod = await this.apodService.getAPOD();
		await interaction.reply({ embeds: [new ApodEmbed(apod)] })
	}
}

