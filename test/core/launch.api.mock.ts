import LaunchAPI from "../../src/core/launches/ports/launch.api";
import LaunchData from "../../src/core/launches/entities/launch";

export default class LaunchApiMock implements LaunchAPI {
    getLaunches(): Promise<LaunchData[]> {
        return Promise.resolve([
            {
               "id":2839,
               "cospar_id":"",
               "sort_date":"1652208600",
               "name":"Starlink-45 (4-13)",
               "provider":{
                  "id":1,
                  "name":"SpaceX",
                  "slug":"spacex"
               },
               "vehicle":{
                  "id":1,
                  "name":"Falcon 9",
                  "company_id":1,
                  "slug":"falcon-9"
               },
               "pad":{
                  "id":1,
                  "name":"SLC-4E",
                  "location":{
                     "id":60,
                     "name":"Vandenberg AFB",
                     "state":"CA",
                     "statename":"California",
                     "country":"United States",
                     "slug":"vandenberg-afb"
                  }
               },
               "missions":[
                  {
                     "id":4402,
                     "name":"Starlink-45 (4-13)",
                     "description":null
                  }
               ],
               "mission_description":null,
               "launch_description":"A SpaceX Falcon 9 rocket will launch the Starlink-45 (4-13) mission on Tuesday, May 10, 2022 at 6:50 PM (UTC).",
               "win_open":"2022-05-10T18:50Z",
               "t0":null,
               "win_close":null,
               "est_date":{
                  "month":null,
                  "day":null,
                  "year":null,
                  "quarter":null
               },
               "date_str":"May 10",
               "tags":[
                  {
                     "id":92,
                     "text":"Series: SpaceX Starlink"
                  }
               ],
               "slug":"starlink-45",
               "weather_summary":"Clear\nTemp: 53.97F\nWind: 15.68mph\n",
               "weather_temp":53.97,
               "weather_condition":"Clear",
               "weather_wind_mph":15.68,
               "weather_icon":"wi-day-sunny",
               "weather_updated":"2022-05-09T00:00:50+00:00",
               "quicktext":"Falcon 9 - Starlink-45 (4-13) - Tue May 10, 2022 18:50:00 UTC (L-1 days, 09:15:35) - https:\/\/rocketlaunch.live\/launch\/starlink-45 for info\/stream",
               "media":[
                  
               ],
               "result":-1,
               "suborbital":false,
               "modified":"2022-05-02T16:46:18+00:00"
            },
            {
               "id":2877,
               "cospar_id":"",
               "sort_date":"1652422080",
               "name":"Starlink-46 (4-15)",
               "provider":{
                  "id":1,
                  "name":"SpaceX",
                  "slug":"spacex"
               },
               "vehicle":{
                  "id":1,
                  "name":"Falcon 9",
                  "company_id":1,
                  "slug":"falcon-9"
               },
               "pad":{
                  "id":3,
                  "name":"SLC-40",
                  "location":{
                     "id":62,
                     "name":"Cape Canaveral SFS",
                     "state":"FL",
                     "statename":"Florida",
                     "country":"United States",
                     "slug":"cape-canaveral-sfs"
                  }
               },
               "missions":[
                  {
                     "id":4444,
                     "name":"Starlink-46 (4-15)",
                     "description":null
                  }
               ],
               "mission_description":null,
               "launch_description":"A SpaceX Falcon 9 rocket will launch the Starlink-46 (4-15) mission on Friday, May 13, 2022 at 6:08 AM (UTC).",
               "win_open":"2022-05-13T06:08Z",
               "t0":null,
               "win_close":null,
               "est_date":{
                  "month":null,
                  "day":null,
                  "year":null,
                  "quarter":null
               },
               "date_str":"May 13",
               "tags":[
                  {
                     "id":92,
                     "text":"Series: SpaceX Starlink"
                  }
               ],
               "slug":"starlink-46",
               "weather_summary":"Mostly Cloudy\nTemp: 64.2F\nWind: 6.52mph\n",
               "weather_temp":64.2,
               "weather_condition":"Mostly Cloudy",
               "weather_wind_mph":6.52,
               "weather_icon":"wi-night-alt-cloudy",
               "weather_updated":"2022-05-09T00:00:50+00:00",
               "quicktext":"Falcon 9 - Starlink-46 (4-15) - Fri May 13, 2022 06:08:00 UTC (L-3 days, 20:33:35) - https:\/\/rocketlaunch.live\/launch\/starlink-46 for info\/stream",
               "media":[
                  
               ],
               "result":-1,
               "suborbital":false,
               "modified":"2022-05-08T16:20:29+00:00"
            },
            {
               "id":679,
               "cospar_id":"",
               "sort_date":"1653000840",
               "name":"CST-100 Starliner (Boe-OFT2)",
               "provider":{
                  "id":3,
                  "name":"United Launch Alliance (ULA)",
                  "slug":"united-launch-alliance-ula"
               },
               "vehicle":{
                  "id":3,
                  "name":"Atlas V",
                  "company_id":3,
                  "slug":"atlas-v"
               },
               "pad":{
                  "id":4,
                  "name":"SLC-41",
                  "location":{
                     "id":62,
                     "name":"Cape Canaveral SFS",
                     "state":"FL",
                     "statename":"Florida",
                     "country":"United States",
                     "slug":"cape-canaveral-sfs"
                  }
               },
               "missions":[
                  {
                     "id":710,
                     "name":"CST-100 Starliner (Boe-OFT2)",
                     "description":null
                  }
               ],
               "mission_description":null,
               "launch_description":"A United Launch Alliance (ULA) Atlas V rocket will launch the CST-100 Starliner (Boe-OFT2) mission on Thursday, May 19, 2022 at 10:54 PM (UTC).",
               "win_open":"2022-05-19T22:54Z",
               "t0":null,
               "win_close":null,
               "est_date":{
                  "month":null,
                  "day":null,
                  "year":null,
                  "quarter":null
               },
               "date_str":"May 19",
               "tags":[
                  {
                     "id":22,
                     "text":"NASA Commercial Crew Program (CCP)"
                  },
                  {
                     "id":23,
                     "text":"Test Flight"
                  },
                  {
                     "id":21,
                     "text":"Uncrewed"
                  }
               ],
               "slug":"boe-oft2",
               "weather_summary":"Clear\nTemp: 79.67F\nWind: 9.16mph\n",
               "weather_temp":79.67,
               "weather_condition":"Clear",
               "weather_wind_mph":9.16,
               "weather_icon":"wi-day-sunny",
               "weather_updated":"2022-05-09T00:00:51+00:00",
               "quicktext":"Atlas V - CST-100 Starliner (Boe-OFT2) - Thu May 19, 2022 22:54:00 UTC (L-10 days, 13:19:35) - https:\/\/rocketlaunch.live\/launch\/boe-oft2 for info\/stream",
               "media":[
                  
               ],
               "result":-1,
               "suborbital":false,
               "modified":"2022-04-14T21:12:09+00:00"
            },
            {
               "id":613,
               "cospar_id":"",
               "sort_date":"1653695996",
               "name":"CAPSTONE",
               "provider":{
                  "id":26,
                  "name":"Rocket Lab",
                  "slug":"rocket-lab"
               },
               "vehicle":{
                  "id":18,
                  "name":"Electron",
                  "company_id":26,
                  "slug":"electron"
               },
               "pad":{
                  "id":88,
                  "name":"Pad TBD",
                  "location":{
                     "id":20,
                     "name":"Rocket Lab Launch Complex, Mahia Peninsula",
                     "state":null,
                     "statename":null,
                     "country":"New Zealand",
                     "slug":"rocket-lab-launch-co"
                  }
               },
               "missions":[
                  {
                     "id":639,
                     "name":"CAPSTONE",
                     "description":null
                  }
               ],
               "mission_description":null,
               "launch_description":"A Rocket Lab Electron rocket will launch the CAPSTONE mission. The launch date is currently targeted for May 27, 2022 (UTC).",
               "win_open":null,
               "t0":null,
               "win_close":null,
               "est_date":{
                  "month":5,
                  "day":27,
                  "year":2022,
                  "quarter":null
               },
               "date_str":"May 27",
               "tags":[
                  {
                     "id":48,
                     "text":"Lunar Orbit"
                  }
               ],
               "slug":"capstone",
               "weather_summary":null,
               "weather_temp":null,
               "weather_condition":null,
               "weather_wind_mph":null,
               "weather_icon":null,
               "weather_updated":null,
               "quicktext":"Electron - CAPSTONE - May 27 (estimated) - https:\/\/rocketlaunch.live\/launch\/capstone for info\/stream",
               "media":[
                  
               ],
               "result":-1,
               "suborbital":false,
               "modified":"2022-05-02T18:58:47+00:00"
            },
            {
               "id":433,
               "cospar_id":"",
               "sort_date":"1654041597",
               "name":"SSLV Demo 1",
               "provider":{
                  "id":18,
                  "name":"ISRO",
                  "slug":"isro"
               },
               "vehicle":{
                  "id":61,
                  "name":"SSLV",
                  "company_id":18,
                  "slug":"sslv"
               },
               "pad":{
                  "id":7,
                  "name":"FLP",
                  "location":{
                     "id":67,
                     "name":"Satish Dhawan Space Centre",
                     "state":null,
                     "statename":null,
                     "country":"India",
                     "slug":"satish-dhawan-space-"
                  }
               },
               "missions":[
                  {
                     "id":417,
                     "name":"SSLV Demo 1",
                     "description":null
                  }
               ],
               "mission_description":null,
               "launch_description":"An ISRO SSLV rocket will launch the SSLV Demo 1 mission. The launch date is currently targeted for May, 2022 (UTC).",
               "win_open":null,
               "t0":null,
               "win_close":null,
               "est_date":{
                  "month":5,
                  "day":null,
                  "year":2022,
                  "quarter":null
               },
               "date_str":"May 2022",
               "tags":[
                  {
                     "id":23,
                     "text":"Test Flight"
                  },
                  {
                     "id":14,
                     "text":"Vehicle Debut"
                  }
               ],
               "slug":"sslv-demo-1",
               "weather_summary":null,
               "weather_temp":null,
               "weather_condition":null,
               "weather_wind_mph":null,
               "weather_icon":null,
               "weather_updated":null,
               "quicktext":"SSLV - SSLV Demo 1 - May 2022 (estimated) - https:\/\/rocketlaunch.live\/launch\/sslv-demo-1 for info\/stream",
               "media":[
                  
               ],
               "result":-1,
               "suborbital":false,
               "modified":"2022-03-25T22:52:16+00:00"
            }
         ])
    }
    
}