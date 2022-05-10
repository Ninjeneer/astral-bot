import ISSTrackerAPI from "../../../src/core/iss/ports/iss-tracker.port";
import { Position } from "../../../src/core/iss/entities/position.entity";

export default class ISSTrackerAPIMock implements ISSTrackerAPI {
    getPosition(): Promise<Position> {
        return Promise.resolve({
            longitude: -0.12,
            latitude: 51.51
        });
    }

}