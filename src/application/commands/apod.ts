import { Interaction, Message, MessageEmbed } from "discord.js";

import APODService from "../../core/apod/adapters/apod.service";
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

		const embed = new MessageEmbed()
			.setTitle('Astrophoto de la journée')
			.addFields(
				{ name: 'Titre', value: apod.title },
				{ name: 'Description', value: apod.explanation },
			)
			.setURL(apod.hdurl)
			.setColor("#0099ff")
			.setImage(apod.url)
			.setDescription("*Cliquez sur le le titre ci-dessus pour voir en HD*")
			.setFooter({
				text: apod.copyright
			});
		await interaction.reply({ embeds: [embed] })
	}
}

