import { MessageEmbed } from "discord.js";
import { Position } from "../../../core/iss/entities/position.entity";

export default class ISSEmbed extends MessageEmbed {
    constructor(title: string, position: Position) {
        super();

        const osmUrl = `https://www.openstreetmap.org/?mlat=${position.latitude}&mlon=${position.longitude}#map=5/${position.latitude}/${position.longitude}`;

        this
            .setTitle(title)
            .setColor("GOLD")
            .setThumbnail("https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/02/ISS-1200__w770.jpg")
            .setURL(osmUrl)
            .setDescription(osmUrl)
            .addFields(
                { name: "Vitesse", value: `${position.velocity.toFixed()} km/h` },
                { name: "Altitude", value: `${position.altitude.toFixed()} km` },
                { name: "Longitude", value: position.longitude.toFixed(3), inline: true },
                { name: "Latitude", value: position.latitude.toFixed(3), inline: true },
                { name: "Survole", value: this.buildFlyOverText(position) },
            )
    }

    private buildFlyOverText(position: Position): string {
        if (position.country) {
            return `${position.country}${position.city ? ', ' + position.city : ''}`;
        }
        return 'Aucun continent';
    }
}