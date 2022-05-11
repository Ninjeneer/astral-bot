import { APOD } from "../../core/apod/entities/apod.entity";
import { MessageEmbed } from "discord.js";

export default class ApodEmbed extends MessageEmbed {
    constructor(apod: APOD) {
        super();

        this.setTitle('Astrophoto de la journée')
            .addFields(
                { name: 'Titre', value: apod.title },
                { name: 'Description', value: apod.explanation.length > 1024 ? apod.explanation.substring(0, 1020) + '...' : apod.explanation },
            )
            .setURL(apod.hdurl)
            .setColor("#0099ff")
            .setImage(apod.url)
            .setDescription("*Cliquez sur le le titre ci-dessus pour voir en HD*")
            .setFooter({
                text: '©  ' + apod.copyright
            });
    }
}