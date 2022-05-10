import { APOD } from "../entities/apod.entity";

export default interface APODAPI {
    getAPOD(): Promise<APOD>;
}