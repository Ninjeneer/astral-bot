import { LaunchData } from "../entities/launch";

export default interface LaunchAPI {
    getLaunches(): Promise<LaunchData[]>;
}