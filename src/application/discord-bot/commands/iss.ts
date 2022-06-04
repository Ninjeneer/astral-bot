import Command from "./commands";
import ISSEmbed from "../embeds/iss.embed";
import ISSTrackerService from "../../../core/iss/adapters/iss-tracker.service";
import { Message } from "discord.js";
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
		await interaction.reply({ embeds: [new ISSEmbed('Suivi de l\'ISS', position)] })
	}
}

