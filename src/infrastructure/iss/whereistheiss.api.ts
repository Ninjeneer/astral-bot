import ISSTrackerAPI from "../../core/iss/ports/iss-tracker.port";
import { Position } from "../../core/iss/entities/position.entity";
import fetch from 'node-fetch';

const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

export default class WhereIsTheISSAPI implements ISSTrackerAPI {
    async getPosition(): Promise<Position> {
        return await fetch(api_url).then((r) => r.json());
    }
}