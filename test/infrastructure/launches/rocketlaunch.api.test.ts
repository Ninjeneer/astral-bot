import RocketLaunchAPI from '../../../src/infrastructure/launches/rocketlaunch.api';

describe("Rocket Launch API", () => {
    let rocketLaunchApi: RocketLaunchAPI;

    beforeEach(() => {
        rocketLaunchApi = new RocketLaunchAPI();
    });

    it("should call the Rocket Launch API", async () => {
        const launches = await rocketLaunchApi.getLaunches();
        expect(launches).toBeDefined();
    });
});
