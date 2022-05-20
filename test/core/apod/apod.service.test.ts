import APODAPI from "../../../src/core/apod/ports/apod.api";
import APODAPIMock from "./apod.api.mock";
import APODService from "../../../src/core/apod/services/apod.service";
import APODServiceImpl from "../../../src/core/apod/services/apod.service";

describe("Launch Service", () => {
    let apodService: APODService;
    let apodApi: APODAPI;

    beforeEach(() => {
        apodApi = new APODAPIMock();
        apodService = new APODServiceImpl(apodApi);
    });

    it("should be defined", () => {
        expect(apodService).toBeDefined();
    });

    it("should get the APOD", async () => {
        const apod = await apodService.getAPOD();
        expect(apod.title).toBe("Jupiter");
        expect(apod.url).toBe("https://photo.com/jupiter.png");
    });
});