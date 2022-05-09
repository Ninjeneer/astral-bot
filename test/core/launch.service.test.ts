import LaunchAPI from "../../src/core/launches/ports/launch.api";
import LaunchApiMock from "./launch.api.mock";
import LaunchRepositoryImpl from "../../src/infrastructure/launches/launch.repository";
import LaunchService from "../../src/core/launches/adapters/launch.service";
import LaunchServiceImpl from "../../src/core/launches/services/launch.service";

describe("Launch Service", () => {
    let launchService: LaunchService;
    let launchApi: LaunchApiMock;

    beforeEach(() => {
        launchApi = new LaunchApiMock();
        launchService = new LaunchServiceImpl(new LaunchRepositoryImpl(), launchApi);
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
});