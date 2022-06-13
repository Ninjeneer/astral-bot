import { LaunchData } from "./launch";

export default class Notification {
    private launch: LaunchData;
    private hourNotification: boolean;
    private nowNotification: boolean;

    constructor(launch: LaunchData) {
        this.launch = launch;
    }

    public hasBeenHourlyNotified(): boolean {
        return this.hourNotification;
    }

    public hasBeenNowNotified(): boolean {
        return this.nowNotification;
    }

    public setHourlyNotified(hourlyNotified: boolean): void {
        this.hourNotification = hourlyNotified;
    }

    public setNowNotified(nowNotified: boolean): void {
        this.nowNotification = nowNotified;
    }

    public getLaunch(): LaunchData {
        return this.launch;
    }
}