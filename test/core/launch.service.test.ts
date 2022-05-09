import LaunchService from "../../src/core/launches/adapters/launch.service";
import LaunchServiceImpl from "../../src/core/launches/services/launch.service";

describe("Launch Service", () => {
    let launchService: LaunchService;

    beforeEach(() => {
        const launchRepository = null;
        launchService = new LaunchServiceImpl(launchRepository);
    });

    it("should be defined", () => {
        expect(launchService).toBeDefined();
    });
});