import LaunchAPI from "../ports/launch.api";
import LaunchData from "../entities/launch";
import LaunchRepository from "../ports/launch.repository";
import LaunchService from "../adapters/launch.service";

export default class LaunchServiceImpl implements LaunchService {
    private launchRepository: LaunchRepository;
    private launchApi: LaunchAPI;

    constructor(launchRepository: LaunchRepository) {
        this.launchRepository = launchRepository;
    }
    
    public async getLaunches(): Promise<LaunchData[]> {
        throw new Error("Method not implemented.");
    }

    public async fetchLaunches(): Promise<void> {
        const launches = await this.launchApi.getLaunches();

        // Clear past launches
        for (const launch of await this.launchRepository.getLaunches()) {
            if (new Date(launch.win_open) < new Date()) {
                this.launchRepository.deleteLaunchById(launch.id);
            }
        }

        // Add new launches
        for (const launch of launches) {
            if (!(await this.launchRepository.getLaunches()).map((l) => l.id).includes(launch.id)) {
                // console.log('adding ' + launch.id);
                await this.launchRepository.saveLaunch(launch);
            }
        }
    }
}