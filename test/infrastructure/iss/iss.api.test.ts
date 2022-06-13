import WhereIsTheISSAPI from "../../../src/infrastructure/iss/whereistheiss.api";

describe("ISS Tracker API", () => {
    let issTrackerApi: WhereIsTheISSAPI;

    beforeEach(() => {
        issTrackerApi = new WhereIsTheISSAPI();
    });

    it("should call the ISS Tracker API", async () => {
        const position = await issTrackerApi.getPosition();
        expect(position).toBeDefined();
        expect(position.latitude).toBeDefined();
        expect(position.longitude).toBeDefined();
    });
});