import LaunchAPI from "../ports/launch.api";
import LaunchData from "../entities/launch";
import LaunchRepository from "../ports/launch.repository";
import LaunchService from "../adapters/launch.service";
import Notification from "../entities/notification";
import NotificationRepository from "../ports/notification.repository";

export default class LaunchServiceImpl implements LaunchService {
    private launchRepository: LaunchRepository;
    private launchApi: LaunchAPI;
    private notificationRepository: NotificationRepository;

    constructor(launchRepository: LaunchRepository, launchApi: LaunchAPI, notificationRepository: NotificationRepository) {
        this.launchRepository = launchRepository;
        this.launchApi = launchApi;
        this.notificationRepository = notificationRepository;
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
                this.notificationRepository.deleteById(launch.id);
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
        if (launch.sort_date) {
            description += `\tLancement le : ${new Date(launch.sort_date * 1000).toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris' })} à ${new Date(launch.sort_date * 1000).toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' })}\n`;
        } else {
            description += `\tAucune date de lancement prévue pour le moment\n`
        }
        description += `\tPosition : ${launch.pad.location.country} - ${launch.pad.location.name}\n`;
        description += `\tLancé par : ${launch.provider.name}\n`

        const videoURL = this.getVideoURL(launch.provider.name)
        if (videoURL) {
            description += `\tSuivre sur : ${videoURL}`;
        }
        return description;
    }

    public async getIncomingLaunchNotifications(): Promise<Notification[]> {
        const notifications: Notification[] = [];
        
        const launches = await this.getLaunches();
        for (const launch of launches) {
            // Check if the notification exist, otherwise create it
            let notification = await this.notificationRepository.findByLaunchId(launch.id);
            if (!notification) {
                notification = new Notification(launch);
            }

            // Check if the launch occurs in the next five minutes or in the next hour
            if (!notification.hasBeenNowNotified() && launch.sort_date && launch.sort_date * 1000 <= new Date().getTime() + 5 * 60 * 1000) {
                notification.setNowNotified(true);
                notifications.push(notification);
            } else if (!notification.hasBeenNowNotified() && !notification.hasBeenHourlyNotified() && launch.sort_date && launch.sort_date * 1000 <= new Date().getTime() + 60 * 60 * 1000) {
                notification.setHourlyNotified(true);
                notifications.push(notification);
            }
            this.notificationRepository.save(notification);
        }

        return notifications;
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