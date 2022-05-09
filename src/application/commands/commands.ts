import { Interaction, Message } from 'discord.js';

import { SlashCommandBuilder } from '@discordjs/builders';

export default abstract class Command {
    private data: SlashCommandBuilder;

    constructor(data: SlashCommandBuilder) {
        this.data = data;
    }

    abstract execute(interaction: Message): Promise<void>;

    public getDefinition(): SlashCommandBuilder {
        return this.data;
    }
}