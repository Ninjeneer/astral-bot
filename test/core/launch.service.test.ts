import LaunchApiMock from "./launch.api.mock";
import LaunchRepositoryImpl from "../../src/infrastructure/launches/launch.repository";
import LaunchService from "../../src/core/launches/adapters/launch.service";
import LaunchServiceImpl from "../../src/core/launches/services/launch.service";
import NotificationRepositoryImpl from '../../src/infrastructure/notifications/notification.repository';

describe("Launch Service", () => {
    let launchService: LaunchService;
    let launchApi: LaunchApiMock;

    beforeEach(() => {
        launchApi = new LaunchApiMock();
        launchService = new LaunchServiceImpl(new LaunchRepositoryImpl(), launchApi, new NotificationRepositoryImpl());
    });

    it("should be defined", () => {
        expect(launchService).toBeDefined();
    });

    it("should delete old launches", async () => {
        await launchService.fetchLaunches();
        await launchService.fetchLaunches();
        const launches = await launchService.getLaunches();
        expect(launches.length).toBe(1);
    });

    it("should notify a new launch", async () => {
        await launchService.fetchLaunches();
        launchApi.launches.push({
            id: 100,
            name: "test",
            sort_date: new Date().getTime() + 1000
        });
        const launchesToNotify = await launchService.fetchLaunches();

        expect(launchesToNotify.length).toBe(1);
        expect(launchesToNotify[0].id).toBe(100);
        expect(launchesToNotify[0].name).toBe("test");
    });

    it("should notify launches occurring in an hour", async () => {
        launchApi.launches = [{ id: 1, name: "launch1", sort_date: new Date().getTime() / 1000 + 3500 }];
        await launchService.fetchLaunches();
        const notifications = await launchService.getIncomingLaunchNotifications();
        expect(notifications.length).toBe(1);
        expect(notifications[0].hasBeenHourlyNotified()).toBe(true);
    });

    it("should not notify twice launches occurring in an hour", async () => {
        launchApi.launches = [{ id: 1, name: "launch1", sort_date: new Date().getTime() / 1000 + 3500 }];
        await launchService.fetchLaunches();
        let notifications = await launchService.getIncomingLaunchNotifications();
        expect(notifications.length).toBe(1);
        expect(notifications[0].hasBeenHourlyNotified()).toBe(true);

        notifications = await launchService.getIncomingLaunchNotifications();
        expect(notifications.length).toBe(0);
    });

    it("should notify launches occurring in next 5 minutes", async () => {
        launchApi.launches = [{ id: 1, name: "launch1", sort_date: new Date().getTime() / 1000 + 300 }];
        await launchService.fetchLaunches();
        const notifications = await launchService.getIncomingLaunchNotifications();
        expect(notifications.length).toBe(1);
        expect(notifications[0].hasBeenNowNotified()).toBe(true);
    });

    it("should not notify twice launches occurring in the next five minutes", async () => {
        launchApi.launches = [{ id: 1, name: "launch1", sort_date: new Date().getTime() / 1000 + 300 }];
        await launchService.fetchLaunches();
        let notifications = await launchService.getIncomingLaunchNotifications();
        expect(notifications.length).toBe(1);
        expect(notifications[0].hasBeenNowNotified()).toBe(true);

        notifications = await launchService.getIncomingLaunchNotifications();
        expect(notifications.length).toBe(0);
    });
});