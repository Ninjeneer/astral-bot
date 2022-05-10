import { Position } from "../entities/position.entity";

export default interface ISSTrackerAPI {
    getPosition(): Promise<Position>;
}