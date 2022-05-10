import ISSTrackerAPI from "../../core/iss/ports/iss-tracker.port";
import { Position } from "../../core/iss/entities/position.entity";
import fetch from 'node-fetch';

const api_url = "http://api.open-notify.org/iss-now.json"

export default class OpenNotifyAPI implements ISSTrackerAPI {
    async getPosition(): Promise<Position> {
        const data = await fetch(api_url).then((r) => r.json());
        return {
            longitude: data.iss_position.longitude,
            latitude: data.iss_position.latitude
        };
    }
}