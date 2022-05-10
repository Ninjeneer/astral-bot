import { APOD } from "../entities/apod.entity";

export default interface APODService {
    getAPOD(): Promise<APOD>;
}