import ISSTrackerAPI from "../ports/iss-tracker.port";
import ISSTrackerService from "../adapters/iss-tracker.service";
import { Position } from "../entities/position.entity";

export default class ISSTrackerServiceImpl implements ISSTrackerService {
    private readonly issTrackerAPI: ISSTrackerAPI;

    constructor(issTrackerAPI: ISSTrackerAPI) {
        this.issTrackerAPI = issTrackerAPI;
    }
    
    async getPosition(): Promise<Position> {
        return await this.issTrackerAPI.getPosition();
    }
}