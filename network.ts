const fetch = require('node-fetch');

import LaunchData from './launch';
const api_url = 'https://fdo.rocketlaunch.live/json/launches/next/5';
const launchesCache = new Map();

let firstRun = true;

/**
 * @returns {Promise<LaunchData[]>}
 */
async function getLaunches() {
    return (await fetch(api_url).then((r) => r.json())).result.map(r => Object.assign(new LaunchData(), r));
}

function startFetchDataTask(newLaunchAction) {
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

module.exports = {
    getLaunches, startFetchDataTask, launchesCache
}