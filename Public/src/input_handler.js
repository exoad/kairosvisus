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
//script.cityImage.mainPass.baseTex = global.fetchFlagTexture("russia");
var sceneObject = script.getSceneObject();
var interactionComponent = sceneObject.getComponent(
  "InteractionComponent");
if (interactionComponent) {
  interactionComponent.onTouchStart.add((eventArgs) => {
    //global.populate(); // fix (lazy but idc) <- this part makes the app die from rate limiting XD
    if (global.cities[script.inputText.text
        .toLowerCase()]) {
      let original_city_name = script.inputText.text
        .toLowerCase();
      var city = global.cities[script.inputText.text
        .toLowerCase()];
      global.util.log("FOUND: " + script.inputText.text
        .toLowerCase());
      global.weather.current_condition(city.latitude,
        city
        .longitude, (bool_res, json_cb) => {
          if (!bool_res) {
            script.cityImage.mainMaterial
              .mainPass.baseTex = global
              .fetchFlagTexture(json_cb
                .address.country.replace(
                  "\\s+", "")
              ); // regex doesnt work T_T
            script.localeTextInfo.enabled = true;
            script.localeTextInfo.text = original_city_name;
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
  });
}