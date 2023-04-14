gdjs.Scene8Code = {};
gdjs.Scene8Code.GDwhiteObjects1= [];
gdjs.Scene8Code.GDwhiteObjects2= [];
gdjs.Scene8Code.GDb1Objects1= [];
gdjs.Scene8Code.GDb1Objects2= [];
gdjs.Scene8Code.GDb2Objects1= [];
gdjs.Scene8Code.GDb2Objects2= [];
gdjs.Scene8Code.GDb3Objects1= [];
gdjs.Scene8Code.GDb3Objects2= [];
gdjs.Scene8Code.GDb4Objects1= [];
gdjs.Scene8Code.GDb4Objects2= [];
gdjs.Scene8Code.GDditoeduObjects1= [];
gdjs.Scene8Code.GDditoeduObjects2= [];
gdjs.Scene8Code.GDb5Objects1= [];
gdjs.Scene8Code.GDb5Objects2= [];
gdjs.Scene8Code.GDimg52Objects1= [];
gdjs.Scene8Code.GDimg52Objects2= [];
gdjs.Scene8Code.GDimg53Objects1= [];
gdjs.Scene8Code.GDimg53Objects2= [];
gdjs.Scene8Code.GDc52Objects1= [];
gdjs.Scene8Code.GDc52Objects2= [];
gdjs.Scene8Code.GDc53Objects1= [];
gdjs.Scene8Code.GDc53Objects2= [];

gdjs.Scene8Code.conditionTrue_0 = {val:false};
gdjs.Scene8Code.condition0IsTrue_0 = {val:false};
gdjs.Scene8Code.condition1IsTrue_0 = {val:false};
gdjs.Scene8Code.condition2IsTrue_0 = {val:false};


gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene8Code.GDb1Objects1});
gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene8Code.GDb2Objects1});
gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene8Code.GDb3Objects1});
gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene8Code.GDb4Objects1});
gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb5Objects1Objects = Hashtable.newFrom({"b5": gdjs.Scene8Code.GDb5Objects1});
gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDc52Objects1Objects = Hashtable.newFrom({"c52": gdjs.Scene8Code.GDc52Objects1});
gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDc53Objects1Objects = Hashtable.newFrom({"c53": gdjs.Scene8Code.GDc53Objects1});
gdjs.Scene8Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c53"), gdjs.Scene8Code.GDc53Objects1);
gdjs.copyArray(runtimeScene.getObjects("img53"), gdjs.Scene8Code.GDimg53Objects1);
{for(var i = 0, len = gdjs.Scene8Code.GDimg53Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDimg53Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene8Code.GDc53Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDc53Objects1[i].hide();
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene8Code.GDb1Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene8Code.GDb2Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene8Code.GDb3Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene8Code.GDb4Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b5"), gdjs.Scene8Code.GDb5Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDb5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c52"), gdjs.Scene8Code.GDc52Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDc52Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDc52Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c53"), gdjs.Scene8Code.GDc53Objects1);
gdjs.copyArray(runtimeScene.getObjects("img52"), gdjs.Scene8Code.GDimg52Objects1);
gdjs.copyArray(runtimeScene.getObjects("img53"), gdjs.Scene8Code.GDimg53Objects1);
{for(var i = 0, len = gdjs.Scene8Code.GDc52Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDc52Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDimg52Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDimg52Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDimg53Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDimg53Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDc53Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDc53Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c53"), gdjs.Scene8Code.GDc53Objects1);

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDc53Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", true);
}}

}


{


{
}

}


};

gdjs.Scene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene8Code.GDwhiteObjects1.length = 0;
gdjs.Scene8Code.GDwhiteObjects2.length = 0;
gdjs.Scene8Code.GDb1Objects1.length = 0;
gdjs.Scene8Code.GDb1Objects2.length = 0;
gdjs.Scene8Code.GDb2Objects1.length = 0;
gdjs.Scene8Code.GDb2Objects2.length = 0;
gdjs.Scene8Code.GDb3Objects1.length = 0;
gdjs.Scene8Code.GDb3Objects2.length = 0;
gdjs.Scene8Code.GDb4Objects1.length = 0;
gdjs.Scene8Code.GDb4Objects2.length = 0;
gdjs.Scene8Code.GDditoeduObjects1.length = 0;
gdjs.Scene8Code.GDditoeduObjects2.length = 0;
gdjs.Scene8Code.GDb5Objects1.length = 0;
gdjs.Scene8Code.GDb5Objects2.length = 0;
gdjs.Scene8Code.GDimg52Objects1.length = 0;
gdjs.Scene8Code.GDimg52Objects2.length = 0;
gdjs.Scene8Code.GDimg53Objects1.length = 0;
gdjs.Scene8Code.GDimg53Objects2.length = 0;
gdjs.Scene8Code.GDc52Objects1.length = 0;
gdjs.Scene8Code.GDc52Objects2.length = 0;
gdjs.Scene8Code.GDc53Objects1.length = 0;
gdjs.Scene8Code.GDc53Objects2.length = 0;

gdjs.Scene8Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene8Code'] = gdjs.Scene8Code;
