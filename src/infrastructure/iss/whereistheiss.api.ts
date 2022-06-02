import ISSTrackerAPI from "../../core/iss/ports/iss-tracker.port";
import { Position } from "../../core/iss/entities/position.entity";
import fetch from 'node-fetch';

const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

export default class WhereIsTheISSAPI implements ISSTrackerAPI {
    async getPosition(): Promise<Position> {
        const position = await fetch(api_url).then((r) => r.json()) as Position;
        try {
            const reverseGeocoding = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=${process.env.LOCATIONIQ_API_KEY}&lat=${position.latitude}&lon=${position.longitude}&accept-language=fr&format=json`)
                .then((response) => response.json());
            position.country = reverseGeocoding.address.country;
            position.city = reverseGeocoding.address.city;
        } catch (e) {
            position.country = null;
            position.city = null;
        }
        return position;
    }
}