import { APOD, APODMediaType } from "../../../core/apod/entities/apod.entity";

import { MessageEmbed } from "discord.js";

export default class ApodEmbed extends MessageEmbed {
    constructor(apod: APOD) {
        super();

        if (apod.media_type === APODMediaType.VIDEO) {
            // Remove the "emebed" url type to get a normal link
            apod.url = this.transformVideoLink(apod.url);
        }

        this.setTitle('Astro' + (apod.media_type === APODMediaType.IMAGE ? 'photo' : 'video') + ' de la journée')
            .addFields(
                { name: 'Titre', value: apod.title },
                { name: 'Description', value: apod.explanation.length > 1024 ? apod.explanation.substring(0, 1020) + '...' : apod.explanation },
            )
            .setURL(apod.hdurl ? apod.hdurl : apod.url)
            .setColor("#0099ff")
            .setFooter({
                text: '©  ' + (apod.copyright ? apod.copyright : 'Ce bg de A.S.T.R.A.L')
            });


        if (apod.media_type === APODMediaType.IMAGE) {
            this.setDescription("*Cliquez sur le le titre ci-dessus pour voir en HD*");
            this.setImage(apod.url);
        }
    }

    private transformVideoLink(url: string): string {
        return url.replace('embed/', 'watch?v=');
    }
}