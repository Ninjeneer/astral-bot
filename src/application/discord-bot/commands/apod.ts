import { APODMediaType } from "../../../core/apod/entities/apod.entity";
import APODService from "../../../core/apod/adapters/apod.service";
import ApodEmbed from "../embeds/apod.embed";
import Command from "./commands";
import { Message } from "discord.js";
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
		if (apod.media_type === APODMediaType.VIDEO) {
			await interaction.channel.send(apod.url);
		}
	}
}

