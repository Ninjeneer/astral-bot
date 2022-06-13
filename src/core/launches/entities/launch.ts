export type LaunchData = {
    id: number;
    cospar_id: string;
    sort_date: string;
    name: string;
    provider: Provider;
    vehicle: Vehicle;
    pad: Pad;
    missions: Mission[];
    mission_description?: any;
    launch_description: string;
    win_open?: string;
    t0?: any;
    win_close?: any;
    est_date: Estdate;
    date_str: string;
    tags: Tag[];
    slug: string;
    weather_summary?: string;
    weather_temp?: number;
    weather_condition?: string;
    weather_wind_mph?: number;
    weather_icon?: string;
    weather_updated?: string;
    quicktext: string;
    media: any[];
    result: number;
    suborbital: boolean;
    modified: string;
}

export type Tag = {
    id: number;
    text: string;
}

export type Estdate = {
    month?: number;
    day?: number;
    year?: number;
    quarter?: any;
}

export type Mission = {
    id: number;
    name: string;
    description?: any;
}

export type Pad = {
    id: number;
    name: string;
    location: Location;
}

export type Location = {
    id: number;
    name: string;
    state?: string;
    statename?: string;
    country: string;
    slug: string;
}

export type Vehicle = {
    id: number;
    name: string;
    company_id: number;
    slug: string;
}

export type Provider = {
    id: number;
    name: string;
    slug: string;
}