import ISSTrackerAPI from "../../../src/core/iss/ports/iss-tracker.port";
import { Position } from "../../../src/core/iss/entities/position.entity";

export default class ISSTrackerAPIMock implements ISSTrackerAPI {
    getPosition(): Promise<Position> {
        return Promise.resolve({
            longitude: -0.12,
            latitude: 51.51,
            altitude: 100,
            velocity: 100,
            visibility: "visible",
            footprint: 100,
            timestamp: Date.now(),
            daynum: Date.now(),
            solar_lat: 51.51,
            solar_lon: -0.12,
            units: "meters",
            name: "ISS",
            id: 25544
        });
    }

}