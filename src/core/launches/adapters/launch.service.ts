import LaunchData from "../entities/launch";
import Notification from "../entities/notification";

export default interface LaunchService {
    getLaunches(): Promise<LaunchData[]>;
    buildLaunchDescription(launch: LaunchData): string;
    fetchLaunches(): Promise<LaunchData[]>;
    getIncomingLaunchNotifications(): Promise<Notification[]>;
}