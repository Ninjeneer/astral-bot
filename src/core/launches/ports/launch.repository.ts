import LaunchData from "../entities/launch";

export default interface LaunchRepository {
    getLaunches(): Promise<LaunchData[]>;
    saveLaunch(launch: LaunchData): Promise<void>;
    deleteLaunch(launch: LaunchData): Promise<void>;
    deleteLaunchById(id: string): Promise<void>;
}