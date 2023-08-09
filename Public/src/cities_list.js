// @input Component.Text citiesList

global.populate = () =>
{
  global.util.low("Populate...");
  script.citiesList.text = "";
  let strBuffer = "";
  for (var x in global.cities)
  {
    global.util.low(`Fetching data for: ${x}`);
    global.weather.current_condition(global.cities[x].latitude,
      global.cities[x].longitude, (bool_res, json_cb) =>
      {
        if (!bool_res)
        { // this is a callback so this action happens later, must update lazily
          strBuffer +=
            `${global.countryFlagEmoji(json_cb.address.country)}  ${json_cb.address.locality}\n${json_cb.address.adminArea1}\n${json_cb.address.country}\n\n`;
          global.util.low(
            `Fetched ${json_cb.address.locality} with: ${JSON.stringify(json_cb)}`
            );
          script.citiesList.text = "...\n\n\n\n\n" + strBuffer + "\n\n...";
        }
      });
  }
}

var sceneObject = script.getSceneObject();
var interactionComponent = sceneObject.getComponent(
  "InteractionComponent");
interactionComponent.onTouchEnd.add((eventArgs) =>
{
  global.populate();
});


// try to populate
global.populate();