import LaunchAPI from "../../core/launches/ports/launch.api";
import { LaunchData } from "../../core/launches/entities/launch";
import fetch from 'node-fetch';

const api_url = 'https://fdo.rocketlaunch.live/json/launches/next/5';

export default class RocketLaunchAPI implements LaunchAPI {
    async getLaunches(): Promise<LaunchData[]> {
        return (await fetch(api_url).then((r) => r.json())).result;
    }
}