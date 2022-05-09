export default class LaunchData {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    cospar_id;

    /**
     * @type {string}
     */
    sort_date;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {LaunchProvider}
     */
    provider;

    /**
     * @type {LaunchVehicle}
     */
    vehicle;

    /**
     * @type {LaunchPad}
     */
    pad;

    /**
     * @type {LaunchMission[]}
     */
    missions;

    /**
     * @type {string}
     */
    mission_description;

    /**
     * @type {string}
     */
    launch_description;

    /**
     * @type {string}
     */
    win_open;

    /**
     * @type {number}
     */
    t0;

    /**
     * @type {string}
     */
    win_close;

    /**
     * @type {string}
     */
    date_str;

    /**
     * @type {string}
     */
    weather_summary;

    /**
     * @type {number}
     */
    weather_temp;

    /**
     * @type {string}
     */
    weather_condition;

    /**
     * @type {number}
     */
    weather_wind_mph;

    /**
     * @type {string}
     */
    weather_icon;

    /**
     * @type {string}
     */
    weather_updated;

    /**
     * @type {string}
     */
    quicktext;

    /**
     * @type {boolean}
     */
    suborbital;

    /**
     * @type {string}
     */
    modified;
}

type LaunchProvider = {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    slug;
}

type LaunchVehicle ={
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {number}
     */
    company_id;

    /**
     * @type {string}
     */
    slug;
}

type LaunchPad = {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {Location}
     */
    location;
}

type LaunchMission = {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    description;
}

type Location = {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    state;

    /**
     * @type {string}
     */
    statename;

    /**
     * @type {string}
     */
    country;

    /**
     * @type {string}
     */
    slug;
}