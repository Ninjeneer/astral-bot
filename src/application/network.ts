import LaunchData from '../core/launches/entities/launch';
const fetch = require('node-fetch');

const api_url = 'https://fdo.rocketlaunch.live/json/launches/next/5';
export const launchesCache = new Map();

let firstRun = true;

/**
 * @returns {Promise<LaunchData[]>}
 */
export async function getLaunches() {
    return (await fetch(api_url).then((r) => r.json())).result.map(r => Object.assign(new LaunchData(), r));
}

export function startFetchDataTask(newLaunchAction) {
    setInterval(async () => {
        const launches = await getLaunches();
        // console.log('clés => ')
        // console.log(launchesCache.keys())

        // Clear past launches
        for (const launch of Object.values(launchesCache)) {
            if (new Date(launch.win_open) < new Date()) {
                launchesCache.delete(launch.id);
            }
        }

        // Add new launches
        for (const launch of launches) {
            if (!launchesCache.has(launch.id)) {
                // console.log('adding ' + launch.id);
                launchesCache.set(launch.id, launch);
                if (!firstRun) {
                    newLaunchAction(launch);
                }
            }
        }
        firstRun = false;
    }, 1000 * 5) // 5 seconds
}