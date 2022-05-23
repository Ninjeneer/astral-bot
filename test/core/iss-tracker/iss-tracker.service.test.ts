import ISSImageParser from "../../../src/core/iss/ports/iss-image-parser.port";
import ISSTrackerAPI from "../../../src/core/iss/ports/iss-tracker.port";
import ISSTrackerAPIMock from "./iss-tracker.api.mock";
import ISSTrackerService from "../../../src/core/iss/adapters/iss-tracker.service";
import ISSTrackerServiceImpl from "../../../src/core/iss/services/iss-tracker.service";
import ImageAstroviewerParser from "../../../src/infrastructure/iss/image-astroviewer.parser";

describe("ISS Tracker Service", () => {
    let issTrackerService: ISSTrackerService;
    let issTrackerAPI: ISSTrackerAPI;
    let issImageParser: ISSImageParser;

    beforeEach(() => {
        issTrackerAPI = new ISSTrackerAPIMock();
        issImageParser = new ImageAstroviewerParser();
        issTrackerService = new ISSTrackerServiceImpl(issTrackerAPI);
    });

    it("should be defined", () => {
        expect(issTrackerService).toBeDefined();
    });

    it("should get the ISS position", async () => {
        const position = await issTrackerService.getPosition();
        expect(position.latitude).toBe(51.51);
        expect(position.longitude).toBe(-0.12);
    });
});