import { LaunchData } from "../../core/launches/entities/launch";
import LaunchRepository from "../../core/launches/ports/launch.repository";

export default class LaunchRepositoryImpl implements LaunchRepository {
    private launches: Map<number, LaunchData>;

    constructor() {
        this.launches = new Map();
    }

    getLaunches(): Promise<LaunchData[]> {
        return Promise.resolve(Array.from(this.launches.values()));
    }

    saveLaunch(launch: LaunchData): Promise<void> {
        this.launches.set(launch.id, launch);
        return Promise.resolve();
    }

    deleteLaunch(launch: LaunchData): Promise<void> {
        this.deleteLaunchById(launch.id);
        return Promise.resolve();
    }

    deleteLaunchById(id: number): Promise<void> {
        this.launches.delete(id);
        return Promise.resolve();
    }
}