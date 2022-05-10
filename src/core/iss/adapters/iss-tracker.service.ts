import { Position } from "../entities/position.entity";

export default interface ISSTrackerService {
    getPosition(): Promise<Position>;
}