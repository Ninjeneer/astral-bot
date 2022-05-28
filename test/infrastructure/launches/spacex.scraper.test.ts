import LaunchRepositoryImpl from "../../../src/infrastructure/launches/launch.repository";
import LaunchService from "../../../src/core/launches/adapters/launch.service";
import LaunchServiceImpl from "../../../src/core/launches/services/launch.service";
import NotificationRepositoryImpl from '../../../src/infrastructure/notifications/notification.repository';
import SpaceXVideoScrapper from '../../../src/infrastructure/launches/spacex.scraper';

describe("SpaceX video scrapper", () => {
    let scrapper: SpaceXVideoScrapper;

    beforeEach(() => {
        scrapper = new SpaceXVideoScrapper();
    });

    it("should be defined", () => {
        expect(scrapper).toBeDefined();
    });

    it("should get the button video link", async () => {
        console.log(scrapper.getVideoUrl("https://spacex.com/launches"))
    });
});