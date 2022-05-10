import { APOD } from "../../../src/core/apod/entities/apod.entity";
import APODAPI from "../../../src/core/apod/ports/apod.api";

export default class APODAPIMock implements APODAPI {
    async getAPOD(): Promise<APOD> {
        return Promise.resolve({
            date: "2020-01-01",
            explanation: "Explanation",
            hdurl: "https://photo.com/jupiter.png",
            media_type: "image",
            service_version: "v1",
            title: "Jupiter",
            url: "https://photo.com/jupiter.png",
            copyright: "Copyright",
        });
    }
}