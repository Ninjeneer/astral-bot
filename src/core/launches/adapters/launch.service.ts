import { LaunchData } from "../entities/launch";
import Notification from "../entities/notification";

export default interface LaunchService {
    getLaunches(): Promise<LaunchData[]>;
    buildLaunchDescription(launch: LaunchData): string;
    fetchLaunches(saveExpired?: boolean): Promise<LaunchData[]>;
    getIncomingLaunchNotifications(): Promise<Notification[]>;
}