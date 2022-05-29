export enum APODMediaType {
    IMAGE = 'image',
    VIDEO = 'video',
}

export type APOD = {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: APODMediaType;
    service_version: string;
    title: string;
    url: string;
}