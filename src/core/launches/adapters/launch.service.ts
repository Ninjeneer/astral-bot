import LaunchData from "../entities/launch";

export default interface LaunchService {
    getLaunches(): Promise<LaunchData[]>;
    buildLaunchDescription(launch: LaunchData): string;
}