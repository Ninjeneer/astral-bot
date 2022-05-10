import { Message, MessageEmbed } from "discord.js";

import Command from "./commands";
import ISSTrackerService from "../../core/iss/adapters/iss-tracker.service";
import { SlashCommandBuilder } from '@discordjs/builders';

export default class ISSCommand extends Command {
	private issTrackerService: ISSTrackerService;

	constructor(issTrackerService: ISSTrackerService) {
		super(new SlashCommandBuilder()
			.setName('iss')
			.setDescription('Suivre la position de l\'ISS (International Space Station)'))
		this.issTrackerService = issTrackerService;
	}

	async execute(interaction: Message): Promise<void> {
		const position = await this.issTrackerService.getPosition();
		const osmUrl = `https://www.openstreetmap.org/#map=5/${position.latitude}/${position.longitude}`;

		const embed = new MessageEmbed()
		.setTitle("Suivi de l'ISS")
		.setColor("GOLD")
		.setThumbnail("https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/02/ISS-1200__w770.jpg")
		.setURL(osmUrl)
		.setDescription(osmUrl)
		.addFields(
			{ name: "Vitesse", value: `${position.velocity.toFixed()} km/h` },
			{ name: "Altitude", value: `${position.altitude.toFixed()} km` },
			{ name: "Longitude", value: position.longitude.toFixed(3), inline: true },
			{ name: "Latitude", value: position.latitude.toFixed(3), inline: true }
		)
		await interaction.reply({ embeds: [embed] })
	}
}

