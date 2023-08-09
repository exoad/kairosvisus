// SAME CODE

// @input SceneObject ui_SelectCity
// @input SceneObject ui_SelectCityScrollView
// @input SceneObject ui_EnterInput
var sceneObject = script.getSceneObject();
sceneObject.enabled = false;
var interactionComponent = sceneObject.getComponent(
  "InteractionComponent");
interactionComponent.onTouchStart.add(onTouchStart);

function onTouchStart(eventArgs)
{
  global.util.log("Sussy Amogus tapped: " + sceneObject.name + " @ " +
    eventArgs.position + " for " + eventArgs.touchId);

  script.ui_SelectCityScrollView.enabled = true;

}