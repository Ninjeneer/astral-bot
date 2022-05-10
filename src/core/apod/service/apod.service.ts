import { APOD } from "../entities/apod.entity";
import APODAPI from "../ports/apod.api";
import APODService from "../adapters/apod.service";

export default class APODServiceImpl implements APODService {
    private readonly apodAPI: APODAPI;

    constructor(apodAPI: APODAPI) {
        this.apodAPI = apodAPI;
    }

    async getAPOD(): Promise<APOD> {
        return await this.apodAPI.getAPOD();
    }
}