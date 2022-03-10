// Require the necessary discord.js classes
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const fs = require('fs');
const { startFetchDataTask } = require('./network');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS], presence: { activities: [{ name: 'les étoiles', type: 'WATCHING' }]} });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');

	startFetchDataTask((launch) => {
		const embed = new MessageEmbed();
		embed.setTitle('Nouveau lancement programmé !');
		embed.setDescription(launch.buildDescription());
		client.channels.fetch(process.env.CHANNEL_ID).then((c) => c.send({ embeds: [embed] }));
	});
});

client.on('interactionCreate', async interaction => {
	console.log(interaction.isCommand())
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);
	
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
