// SAME CODE

// @input SceneObject ui_SelectCity
// @input SceneObject ui_SelectCityScrollView
// @input Component.Text ui_SelectCityScrollViewText
// @input Component.Text ui_EnterCityInput
var sceneObject = script.getSceneObject();
var interactionComponent = sceneObject.getComponent(
  "InteractionComponent");
interactionComponent.onTouchStart.add((eventArgs) =>
{
  //global.util.log("Sussy Amogus tapped: " + sceneObject.name + " @ " + eventArgs.position + " for " + eventArgs.touchId);
  if (!script.ui_SelectCityScrollView.enabled || script
    .ui_SelectCityScrollViewText.text == "Nothing here...")
  {
    global.util.log("Loading scrollview...");
    script.ui_EnterCityInput.enabled = true;
    script.ui_SelectCityScrollView.enabled = true;
  }
});