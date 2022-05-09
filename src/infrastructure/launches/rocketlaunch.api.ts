import LaunchAPI from "../../core/launches/ports/launch.api";
import fetch from 'node-fetch';
import launch from "../../core/launches/entities/launch";

const api_url = 'https://fdo.rocketlaunch.live/json/launches/next/5';

export default class RocketLaunchAPI implements LaunchAPI {
    async getLaunches(): Promise<launch[]> {
        return (await fetch(api_url).then((r) => r.json())).result;
    }
}