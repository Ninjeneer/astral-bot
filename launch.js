function getVideoURL(companyName) {
    switch (companyName.toLowerCase()) {
        case 'spacex':
        case 'space x':
            return 'https://www.spacex.com/launches/';
        default:
            return null;
    }
}


class LaunchData {
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

    /**
     * @returns {string}
     */
    buildDescription = () => {
        let description = `**${this.name}**\n`;
        description += `\tLancement le : ${new Date(this.win_open).toLocaleDateString('fr-FR')} à ${new Date(this.win_open).toLocaleTimeString('fr-FR')}\n`;
        description += `\tPosition : ${this.pad.location.name}\n`;

        const videoURL = getVideoURL(this.provider.name)
        if (videoURL) {
            description += `\tSuivre sur : ${videoURL}`;
        }
        return description;
    }
}

class LaunchProvider {
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

class LaunchVehicle {
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

class LaunchPad {
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

class LaunchMission {
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

class Location {
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

module.exports = {
    LaunchData
}