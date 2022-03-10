const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction, MessageEmbed } = require('discord.js');
const { LaunchData } = require('../launch');
const { getLaunches } = require('../network');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('launches')
		.setDescription('Affiche la liste des prochains lancements'),
	/**
	 * 
	 * @param {Interaction} interaction 
	 */
	async execute(interaction) {
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
	},
};
