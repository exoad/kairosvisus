// SAME CODE

// @input SceneObject ui_SelectCity
// @input SceneObject ui_SelectCityScrollView

var sceneObject = script.getSceneObject();
var interactionComponent = sceneObject.getComponent("InteractionComponent");
interactionComponent.onTouchEnd.add((eventArgs) => {
    //global.util.log("ScrollView tapped: " + sceneObject.name + " @ " + eventArgs.position + " for " + eventArgs.touchId);
});