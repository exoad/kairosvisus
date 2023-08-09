// @input Component.ScriptComponent weatherApi
// @input SceneObject ui_SelectCity
// @input SceneObject ui_SelectCityScrollView
// @input Component.Text ui_EnterCityInput
// @input SceneObject locale_display
script.ui_SelectCityScrollView.enabled = false;
script.ui_SelectCity.enabled = true; // assertion
script.ui_EnterCityInput.enabled = false;
script.locale_display.enabled = false;

global.util.log("Kairo Visus created by Jack M (from team Amogus)");
global.util.log(
"------"); // easier to read because lens studio inlines a new line char
for (var city in global.cities)
{
  var data = global.cities[city];
  global.util.low(
    `Loaded ${city}, ${data.province}, ${data.country} => ${data.latitude} ${data.longitude} `
    );
}


// test: choose_city("Boston");

global.choose_city = function choose_city(chosen_city)
{ // chosen_city: { latitude, longitude, country, province }
  // WTF, ok so the callback function supplied to the API must be the signature (result:Bool, data:JSON) and thats why it was just returning random true, false, thought the API was broken XD
  weather.current_condition(global.cities[chosen_city].latitude,
    global.cities[chosen_city].longitude, (b_res, json_data) =>
    {
      global.util.low(JSON.stringify(json_data));
    });
}

global.util.log(global.flagImgMatch("Boston"));