import NasaAPODAPI from "../../../src/infrastructure/apod/nasa.api";

describe("NASA API", () => {
    let nasaApi: NasaAPODAPI;

    beforeEach(() => {
        nasaApi = new NasaAPODAPI();
    });

    it("should call the NASA APOD API", async () => {
        const apod = await nasaApi.getAPOD();
        expect(apod).toBeDefined();
        expect(apod.title).toBeDefined();
        expect(apod.url).toBeDefined();
    });
});