const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const { launchesCache } = require('../network');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
    /**
     * 
     * @param {Interaction} interaction 
     */
	async execute(interaction) {
        // console.log("Before delete : ")
        // console.log(launchesCache.keys())
        launchesCache.delete(launchesCache.keys().next().value)
        // console.log("After delete : ")
        // console.log(launchesCache.keys())

        // console.log(launchesCache.keys())
		await interaction.reply('Pong!');
	},
};
