import LaunchAPI from "../ports/launch.api";
import LaunchData from "../entities/launch";
import LaunchRepository from "../ports/launch.repository";
import LaunchService from "../adapters/launch.service";

export default class LaunchServiceImpl implements LaunchService {
    private launchRepository: LaunchRepository;
    private launchApi: LaunchAPI;

    constructor(launchRepository: LaunchRepository, launchApi: LaunchAPI) {
        this.launchRepository = launchRepository;
        this.launchApi = launchApi;
    }

    public async getLaunches(): Promise<LaunchData[]> {
        return await this.launchRepository.getLaunches();
    }

    public async fetchLaunches(): Promise<LaunchData[]> {
        const launches = await this.launchApi.getLaunches();
        const savedLaunches = [];

        // Clear past launches
        for (const launch of await this.launchRepository.getLaunches()) {
            if (this.launchIsExpired(launch)) {
                this.launchRepository.deleteLaunchById(launch.id);
            }
        }

        // Add new launches
        for (const launch of launches) {
            if (!(await this.launchRepository.getLaunches()).map((l) => l.id).includes(launch.id) && !this.launchIsExpired(launch)) {
                // console.log('adding ' + launch.id);
                await this.launchRepository.saveLaunch(launch);
                savedLaunches.push(launch);
            }
        }
        return savedLaunches;
    }

    public buildLaunchDescription(launch: LaunchData): string {
        let description = `**${launch.name}**\n`;
        description += `\tLancement le : ${launch.win_open ? new Date(launch.win_open).toLocaleDateString('fr-FR') : '??'} à ${launch.win_open ? new Date(launch.win_open).toLocaleTimeString('fr-FR') : '??'}\n`;
        description += `\tPosition : ${launch.pad.location.country} - ${launch.pad.location.name}\n`;
        description += `\tLancé par : ${launch.provider.name}\n`

        const videoURL = this.getVideoURL(launch.provider.name)
        if (videoURL) {
            description += `\tSuivre sur : ${videoURL}`;
        }
        return description;
    }

    private getVideoURL(companyName: string): string {
        switch (companyName.toLowerCase()) {
            case 'spacex':
            case 'space x':
                return 'https://www.spacex.com/launches/';
            default:
                return null;
        }
    }

    private launchIsExpired(launch: LaunchData): boolean {
        return launch.sort_date * 1000 < new Date().getTime();
    }
}