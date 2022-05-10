import ISSTrackerAPI from "../../../src/core/iss/ports/iss-tracker.port";
import ISSTrackerAPIMock from "./iss-tracker.api.mock";
import ISSTrackerService from "../../../src/core/iss/adapters/iss-tracker.service";
import ISSTrackerServiceImpl from "../../../src/core/iss/services/iss-tracker.service";

describe("ISS Tracker Service", () => {
    let issTrackerService: ISSTrackerService;
    let issTrackerAPI: ISSTrackerAPI;

    beforeEach(() => {
        issTrackerAPI = new ISSTrackerAPIMock();
        issTrackerService = new ISSTrackerServiceImpl(issTrackerAPI);
    });

    it("should be defined", () => {
        expect(issTrackerService).toBeDefined();
    });

    it("should get the ISS position", async () => {
        const position = await issTrackerService.getPosition();
        expect(position).toEqual({
            longitude: -0.12,
            latitude: 51.51
        });
    });
});