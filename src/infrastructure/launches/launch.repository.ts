import LaunchData from "../../core/launches/entities/launch";
import LaunchRepository from "../../core/launches/ports/launch.repository";
import launch from "../../core/launches/entities/launch";

export default class LaunchRepositoryImpl implements LaunchRepository {
    private launches: Map<string, LaunchData>;

    constructor() {
        this.launches = new Map();
    }
    
    getLaunches(): Promise<launch[]> {
        return Promise.resolve(Array.from(this.launches.values()));
    }

    saveLaunch(launch: launch): Promise<void> {
        return Promise.resolve(this.saveLaunch(launch));
    }

    deleteLaunch(launch: launch): Promise<void> {
        this.deleteLaunchById(launch.id);
        return Promise.resolve();
    }

    deleteLaunchById(id: string): Promise<void> {
        this.launches.delete(id);
        return Promise.resolve();
    }
}