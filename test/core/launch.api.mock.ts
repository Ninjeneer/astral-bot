import LaunchAPI from "../../src/core/launches/ports/launch.api";
import LaunchData from "../../src/core/launches/entities/launch";

export default class LaunchApiMock implements LaunchAPI {
   public launches: Partial<LaunchData>[] = [
      {
         "id": 1,
         "cospar_id": "",
         "sort_date": "0652208600",
         "name": "Starlink-45 (4-13)",
         "provider": {
            "id": 1,
            "name": "SpaceX",
            "slug": "spacex"
         },
         "vehicle": {
            "id": 1,
            "name": "Falcon 9",
            "company_id": 1,
            "slug": "falcon-9"
         },
         "pad": {
            "id": 1,
            "name": "SLC-4E",
            "location": {
               "id": 60,
               "name": "Vandenberg AFB",
               "state": "CA",
               "statename": "California",
               "country": "United States",
               "slug": "vandenberg-afb"
            }
         },
         "missions": [
            {
               "id": 4402,
               "name": "Starlink-45 (4-13)",
               "description": null
            }
         ],
         "mission_description": null,
         "launch_description": "A SpaceX Falcon 9 rocket will launch the Starlink-45 (4-13) mission on Tuesday, May 10, 2022 at 6:50 PM (UTC).",
         "win_open": "2022-05-10T18:50Z",
         "t0": null,
         "win_close": null,
         "date_str": "May 10",
         "weather_summary": "Clear\nTemp: 53.97F\nWind: 15.68mph\n",
         "weather_temp": 53.97,
         "weather_condition": "Clear",
         "weather_wind_mph": 15.68,
         "weather_icon": "wi-day-sunny",
         "weather_updated": "2022-05-09T00:00:50+00:00",
         "quicktext": "Falcon 9 - Starlink-45 (4-13) - Tue May 10, 2022 18:50:00 UTC (L-1 days, 09:15:35) - https:\/\/rocketlaunch.live\/launch\/starlink-45 for info\/stream",
         "suborbital": false,
         "modified": "2022-05-02T16:46:18+00:00"
      },
      {
         "id": 2,
         "cospar_id": "",
         "sort_date": "1652422080",
         "name": "Starlink-46 (4-15)",
         "provider": {
            "id": 1,
            "name": "SpaceX",
            "slug": "spacex"
         },
         "vehicle": {
            "id": 1,
            "name": "Falcon 9",
            "company_id": 1,
            "slug": "falcon-9"
         },
         "pad": {
            "id": 3,
            "name": "SLC-40",
            "location": {
               "id": 62,
               "name": "Cape Canaveral SFS",
               "state": "FL",
               "statename": "Florida",
               "country": "United States",
               "slug": "cape-canaveral-sfs"
            }
         },
         "missions": [
            {
               "id": 4444,
               "name": "Starlink-46 (4-15)",
               "description": null
            }
         ],
         "mission_description": null,
         "launch_description": "A SpaceX Falcon 9 rocket will launch the Starlink-46 (4-15) mission on Friday, May 13, 2022 at 6:08 AM (UTC).",
         "win_open": "2022-05-13T06:08Z",
         "t0": null,
         "win_close": null,
         "date_str": "May 13",
         "weather_summary": "Mostly Cloudy\nTemp: 64.2F\nWind: 6.52mph\n",
         "weather_temp": 64.2,
         "weather_condition": "Mostly Cloudy",
         "weather_wind_mph": 6.52,
         "weather_icon": "wi-night-alt-cloudy",
         "weather_updated": "2022-05-09T00:00:50+00:00",
         "quicktext": "Falcon 9 - Starlink-46 (4-15) - Fri May 13, 2022 06:08:00 UTC (L-3 days, 20:33:35) - https:\/\/rocketlaunch.live\/launch\/starlink-46 for info\/stream",
         "suborbital": false,
         "modified": "2022-05-08T16:20:29+00:00"
      }
   ];

   getLaunches(): Promise<LaunchData[]> {
      return Promise.resolve(this.launches as LaunchData[]);
   }
}