// @input Component.Text inputText
// @input Component.Text select_button
// @input SceneObject citydisplay
// @input Component.Text localeTextInfo
// @input Component.Image cityImage
// @input Asset.Texture sweden_t
// @input Asset.Texture russia_t
// @input Asset.Texture spain_t
// @input Asset.Texture unitedarabemirates_t
// @input Asset.Texture peru_t
// @input Asset.Texture australia_t
// @input Asset.Texture uruguay_t
// @input Asset.Texture ukraine_t
// @input Asset.Texture southkorea_t
// @input Asset.Texture greece_t
// @input Asset.Texture france_t
// @input Asset.Texture mexico_t
// @input Asset.Texture poland_t
// @input Asset.Texture vietnam_t
// @input Asset.Texture argentina_t
// @input Asset.Texture japan_t
// @input Asset.Texture india_t
// @input Asset.Texture england_t
// @input Asset.Texture null_t
// @input Asset.Texture germany_t
// @input Asset.Texture canada_t
// @input Asset.Texture china_t
// @input Asset.Texture usa_t

// @input Asset.Texture storm_t
// @input Asset.Texture snow_t
// @input Asset.Texture rain_t
// @input Asset.Texture low_visibility_t
// @input Asset.Texture hail_t
// @input Asset.Texture partly_cloud_night_t
// @input Asset.Texture windy_t
// @input Asset.Texture unknown_t
// @input Asset.Texture cold_t
// @input Asset.Texture hot_t
// @input Asset.Texture partlycloudy_t
// @input Asset.Texture clear_night_t
// @input Asset.Texture sunny_t
// @input Asset.Texture lightning_t

// @input Component.Image weatherType
// @input Component.Text temperature

// @input SceneObject particleFallDefault
// @input Component.PostEffectVisual nightTime
// @input SceneObject fogTime
// @input SceneObject nightFog
// @input SceneObject moon
// @input SceneObject sun
// @input SceneObject lowVis
// @input Component.PostEffectVisual sunTime
// @input SceneObject cloudy

global.fetchFlagTexture = (countryName) => {
  countryName = countryName.toLowerCase().trim();
  switch (countryName) {
    case "sweden":
      return script.sweden_t;
    case "russia":
      return script.russia_t;
    case "spain":
      return script.spain_t;
    case "united arab emirates":
      return script.unitedarabemirates_t;
    case "peru":
      return script.peru_t;
    case "australia":
      return script.australia_t;
    case "uruguay":
      return script.uruguay_t;
    case "ukraine":
      return script.ukraine_t;
    case "south korea":
      return script.southkorea_t;
    case "greece":
      return script.greece_t;
    case "france":
      return script.france_t;
    case "mexico":
      return script.mexico_t;
    case "poland":
      return script.poland_t;
    case "vietnam":
      return script.vietnam_t;
    case "argentina":
      return script.argentina_t;
    case "japan":
      return script.japan_t;
    case "india":
      return script.india_t;
    case "united kingdom":
      return script.england_t;
    case "germany":
      return script.germany_t;
    case "canada":
      return script.canada_t;
    case "china":
      return script.china_t;
    case "united states":
      return script.usa_t;
    default:
      return script.null_t;
  }
};

global.weatherTyping = (e) => {
  switch (e) {
    case "SUNNY":
      return {
        texture: script.sunny_t,
          id: 1
      };
    case "LIGHTNING":
      return {
        texture: script.lightning_t,
          id: 2
      };
    case "PARTIAL_CLOUDY":
      return {
        texture: script.partlycloudy_t,
          id: 3
      };
    case "HOT":
      return {
        texture: script.hot_t,
          id: 4
      };
    case "COLD":
      return {
        texture: script.cold_t,
          id: 5
      };
    case "UNKNOWN":
      return {
        texture: script.unknown_t,
          id: 0
      };
    case "WINDY":
      return {
        texture: script.windy_t,
          id: 6
      };
    case "PARTIAL_CLOUDY_NIGHT":
      return {
        texture: script.partly_cloud_night_t,
          id: 7
      };
    case "HAIL":
      return {
        texture: script.hail_t,
          id: 8
      };
    case "LOW_VISIBILITY":
      return {
        texture: script.low_visibility_t,
          id: 9
      };
    case "RAINY":
      return {
        texture: script.rain_t,
          id: 10
      };
    case "SNOW":
      return {
        texture: script.snow_t,
          id: 11
      };
    case "CLEAR_NIGHT":
      return {
        texture: script.clear_night_t,
          id: 12
      };
    case "CLOUDY":
      return {
        texture: script.partlycloudy_t,
          id: 13
      };
    default:
      return {
        texture: script.unknown_t,
          id: 0
      };
  }
};

global.normalizeString = (str) => {
  let buff = "";
  str.split("_").forEach(x => {
    buff += x.charAt(0).toUpperCase() + x.substring(1).toLowerCase() +
    " ";
  });
  return buff;
};

//script.cityImage.mainPass.baseTex = global.fetchFlagTexture("russia");
var sceneObject = script.getSceneObject();
var interactionComponent = sceneObject.getComponent(
  "InteractionComponent");
if (interactionComponent) {
  interactionComponent.onTouchStart.add((eventArgs) => {
    //global.populate(); // fix (lazy but idc) <- this part makes the app die from rate limiting XD
    if (script.inputText.text.substring(0, 3) == "dbg") {
      let type = script.inputText.text.substring(3);
      let r = {
           "resetvfx": global.reset_effects,
           "lowvis": () => script.lowVis.enabled = true,
           "nightfog": () => script.nightFog.enabled = true,
           "fog": () => script.fogTime.enabled = true,
           "sun": () => script.sun.enabled = true,
           "moon": () => script.moon.enabled = true,
           "rain": () => script.particleFallDefault.enabled = true
      };
      r[type.toLowerCase()]();
      script.select_button.enabled = false;
      script.citydisplay.enabled = false;
    }
    else {
      if (global.cities[script.inputText.text
          .toLowerCase()]) {
        let original_city_name = script.inputText.text
          .toLowerCase();
        var city = global.cities[script.inputText.text
          .toLowerCase()];
        global.util.log("FOUND: " + script.inputText.text
          .toLowerCase());
        script.localeTextInfo.enabled = true;
        script.localeTextInfo.text = "Loading...";
        script.weatherType.enabled = true;
        script.weatherType.mainMaterial.mainPass.baseTex = script.unknown_t;
        global.util.low("Stuffs...");
        global.reset_effects();
        script.moon.enabled = false;
        global.weather.current_condition(city.latitude,
          city
          .longitude, (bool_res, c) => {
            let json_cb = c;
            if (!bool_res) {
              script.cityImage.mainMaterial
                .mainPass.baseTex = global
                .fetchFlagTexture(json_cb
                  .address.country.replace(
                    "\\s+", "")
                ); // regex doesnt work T_T
              //global.util.log("Weather Fetched: " +  global.weatherTyping(json_cb.currentCondition.condition).id);
              script.weatherType.mainMaterial.mainPass.baseTex = global
                .weatherTyping(json_cb.currentCondition.condition)
                .texture;
              script.localeTextInfo.text =
                `${global.normalizeString(original_city_name)}\n${global.normalizeString(json_cb.currentCondition.condition)}`;
              script.temperature.text =
                `${parseInt(global.fahrenheightToCelsius(parseInt(json_cb.currentCondition.temperatureF)))}°C`
              //script.particleFallDefault.enabled = true;
              if (json_cb.currentCondition.condition == "CLEAR_NIGHT" ||
                json_cb.currentCondition.condition ==
                "PARTIAL_CLOUDY_NIGHT")
                script.moon.enabled = true;
              if (json_cb.currentCondition.condition == "RAINY" || json_cb
                .currentCondition.condition == "HAIL" || json_cb
                .currentCondition.condition == "SNOWY") {
                script.particleFallDefault.enabled = true;
              }
              else if (json_cb.currentCondition.condition ==
                "CLEAR_NIGHT") {
                script.moon.enabled = true;
                script.nightTime.enabled = true;
              }
              else if (json_cb.currentCondition.condition ==
                "PARTIAL_CLOUDY") {
                script.fogTime.enabled = true;
                script.sun.enabled = true;
              }
              else if (json_cb.currentCondition.condition ==
                "PARTIAL_CLOUDY_NIGHT") {
                script.nightFog.enabled = true;
                script.nightTime.enabled = true;
              }
              else if (json_cb.currentCondition.condition ==
                "LOW_VISIBILITY") {
                script.lowVis.enabled = true;
              } else if (json_cb.currentCondition.condition == "SUNNY"){
                script.sun.enabled = true;
                script.sunTime.enabled = true;
              } else if (json_cb.currentCondition.condition == "CLOUDY"){
                script.cloudy.enabled = true;              
              }
            }
          });
        script.localeTextInfo.text = original_city_name;
        script.select_button.enabled = false;
        script.citydisplay.enabled = false;
      }
      else {
        global.util.log("NOT FOUND: " + script.inputText
          .text
          .toLowerCase());
        script.inputText.text =
          "Not a loaded city"; // very cool bug that we can use because the default Text automatically gets reshown which is good so I dont have to use a delayedcallback
      }
    }
  });
}