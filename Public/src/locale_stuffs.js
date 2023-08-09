// @input Component.Image sweden_f
// @input Component.Image russia_f
// @input Component.Image spain_f
// @input Component.Image unitedarabemirates_f
// @input Component.Image peru_f
// @input Component.Image australia_f
// @input Component.Image uruguay_f
// @input Component.Image ukraine_f
// @input Component.Image southkorea_f
// @input Component.Image greece_f
// @input Component.Image france_f
// @input Component.Image mexico_f
// @input Component.Image poland_f
// @input Component.Image vietnam_f
// @input Component.Image argentina_f
// @input Component.Image japan_f
// @input Component.Image india_f
// @input Component.Image england_f
// @input Component.Image null_f
// @input Component.Image germany_f
// @input Component.Image canada_f
// @input Component.Image china_f
// @input Component.Image usa_f
// @input Component.Image unknown_w
// @input Component.Image partly_cloudy_night_w
// @input Component.Image hail_w
// @input Component.Image storm_w
// @input Component.Image snow_w
// @input Component.Image low_visibility_w
// @input Component.Image rain_w
// @input Component.Image lightning_w
// @input Component.Image sunny_w
// @input Component.Image windy_w
// @input Component.Image clear_night_w
// @input Component.Image cold_w
// @input Component.Image hot_w
// @input Component.Image partly_cloudy_w

// Allowed typed
global.flagsArr = [
  script.sweden_f,
  script.russia_f,
  script.spain_f,
  script.unitedarabemirates_f,
  script.peru_f,
  script.australia_f,
  script.uruguay_f,
  script.ukraine_f,
  script.southkorea_f,
  script.greece_f,
  script.france_f,
  script.mexico_f,
  script.poland_f,
  script.vietnam_f,
  script.argentina_f,
  script.japan_f,
  script.india_f,
  script.england_f,
  script.null_f,
  script.germany_f,
  script.canada_f,
  script.china_f,
  script.usa_f
];

global.weatherTypesArr = [
  script.unknown_w,
  script.partly_cloudy_night_w,
  script.hail_w,
  script.storm_w,
  script.snow_w,
  script.low_visibility_w,
  script.rain_w,
  script.lightning_w,
  script.sunny_w,
  script.windy_w,
  script.clear_night_w,
  script.cold_w,
  script.hot_w,
  script.partly_cloudy_w
];

// mb if i get any of the countries wrong o_O

global.flagImgMatch = (country) =>
{
  country = country.toLowerCase().replace("\\s+", "");
  switch (country)
  { // preloaded ones for ease of use, but does not load every single possible loaded country from the objects panel
    case country == "peru":
      return script.peru_f;
    case country == "australia":
      return script.australia_f;
    case country == "greece":
      return script.greece_f;
    case country == "mexico":
      return script.mexico_f;
    case country == "france":
      return script.france_f;
    case country == "unitedarabemirates":
      return script.unitedarabemirates_f;
    case country == "england":
      return script.england_f;
    case country == "canada":
      return script.canada_f;
    case country == "usa" || country == "unitedstates":
      return script.usa_f;
    case country == "japan":
      return script.japan_f;
    case country == "germany":
      return script.germany_f;
    case country == "china":
      return script.china_f;
    case country == "vietnam":
      return script.vietnam_f;
    case country == "india":
      return script.india_f;
    case country == "france":
      return script.france_f;
    default:
      return script.null_f;
  }
};


global.countryFlagEmoji = (country) =>
{
  if (country === "Peru")
    return "🇵🇪";
  else if (country === "Australia")
    return "🇦🇺";
  else if (country === "Greece")
    return "🇬🇷";
  else if (country === "Mexico")
    return "🇲🇽";
  else if (country === "France")
    return "🇫🇷";
  else if (country === "Unitedarabemirates")
    return "🇦🇪";
  else if (country === "England" || country == "United Kingdom") // mb
    return "🇬🇧";
  else if (country === "Canada")
    return "🇨🇦";
  else if (country === "USA" || country == "United States") // idk
    return "🇺🇸";
  else if (country === "Japan")
    return "🇯🇵";
  else if (country === "Germany")
    return "🇩🇪";
  else if (country === "China")
    return "🇨🇳";
  else if (country === "Vietnam")
    return "🇻🇳";
  else if (country === "India")
    return "🇮🇳";
  else if (country === "Korea" || country == "South Korea")
    return "🇰🇷";
  return "🏴‍☠️";
}


// reference
/*
{"currentCondition":{"condition":"SUNNY","temperatureF":76,"epochMs":"1691588880000","relativeHumidityPerc":"55","pressureMb":1001.7,"windSpeed":15,"detailedCondition":"MOSTLY_SUNNY"},"address":{"adminArea1":"Massachusetts","adminArea2":"Suffolk County","adminArea3":"Boston","locality":"Boston","neighborhood":"Downtown","country":"United States","countryCode":"us","postalCode":"02203","mediaMarketId":"506","congressionalDistrictId":"2508","macroArea":"North America"},"timeZone":{"id":"America/New_York","offsetS":-14400}}
*/

global.cities = {
  "boston":
  {
    latitude: 42.360081,
    longitude: -71.058884,
  },
  "new york city":
  {
    latitude: 40.678177,
    longitude: -73.944160,
  },
  "toronto":
  {
    latitude: 43.653225,
    longitude: -79.383186,
  },
  "mumbai":
  {
    latitude: 19.07283,
    longitude: 72.88261,
  },
  "tokyo":
  {
    latitude: 35.6839,
    longitude: 139.7744,
  },
  "london":
  {
    latitude: -0.118092,
    longitude: 51.509865,
  },
  "paris":
  {
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
  "beijing":
  {
    latitude: 39.9075,
    longitude: 116.39723      
  },
  "london":
  {
    latitude: 51.509865,
    longitude: -0.118092
  },
  "athens":
  {
    latitude: 37.983810,
    longitude: 23.727539
  },
  "montreal":
  {
    latitude: 45.50884,
    longitude: -73.58781
  },
  "seoul": 
  {
    latitude: 37.517235,
    longitude: 127.047325
  }
};

global.citiesFetchData = (name) => global.cities[name];

// global.formatName = (city) => `${global.cities[city]}\n`

// init materials
global.flagsArr.forEach((x) => x.enabled = false);
global.weatherTypesArr.forEach((x) => x.enabled = false);

global.useFahrenheit = false;

global.parseTemperature = (json) =>

global.fahrenheightToCelsius = (f) => (f - 32) * (5 / 9);