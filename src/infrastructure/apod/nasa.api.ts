import { APOD } from "../../core/apod/entities/apod.entity";
import APODAPI from "../../core/apod/ports/apod.api";
import fetch from 'node-fetch';

const api_url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

export default class NasaAPODAPI implements APODAPI {
    async getAPOD(): Promise<APOD> {
        return (await fetch(api_url).then((r) => r.json())).data;
    }
}
