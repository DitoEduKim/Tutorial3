gdjs.Scene3Code = {};
gdjs.Scene3Code.GDwhiteObjects1= [];
gdjs.Scene3Code.GDwhiteObjects2= [];
gdjs.Scene3Code.GDb1Objects1= [];
gdjs.Scene3Code.GDb1Objects2= [];
gdjs.Scene3Code.GDb2Objects1= [];
gdjs.Scene3Code.GDb2Objects2= [];
gdjs.Scene3Code.GDb3Objects1= [];
gdjs.Scene3Code.GDb3Objects2= [];
gdjs.Scene3Code.GDb4Objects1= [];
gdjs.Scene3Code.GDb4Objects2= [];
gdjs.Scene3Code.GDditoeduObjects1= [];
gdjs.Scene3Code.GDditoeduObjects2= [];
gdjs.Scene3Code.GDb5Objects1= [];
gdjs.Scene3Code.GDb5Objects2= [];
gdjs.Scene3Code.GDimg12Objects1= [];
gdjs.Scene3Code.GDimg12Objects2= [];
gdjs.Scene3Code.GDc1Objects1= [];
gdjs.Scene3Code.GDc1Objects2= [];
gdjs.Scene3Code.GDc2Objects1= [];
gdjs.Scene3Code.GDc2Objects2= [];
gdjs.Scene3Code.GDc3Objects1= [];
gdjs.Scene3Code.GDc3Objects2= [];
gdjs.Scene3Code.GDc4Objects1= [];
gdjs.Scene3Code.GDc4Objects2= [];
gdjs.Scene3Code.GDc5Objects1= [];
gdjs.Scene3Code.GDc5Objects2= [];
gdjs.Scene3Code.GDc11Objects1= [];
gdjs.Scene3Code.GDc11Objects2= [];
gdjs.Scene3Code.GDc22Objects1= [];
gdjs.Scene3Code.GDc22Objects2= [];
gdjs.Scene3Code.GDc33Objects1= [];
gdjs.Scene3Code.GDc33Objects2= [];
gdjs.Scene3Code.GDnextObjects1= [];
gdjs.Scene3Code.GDnextObjects2= [];
gdjs.Scene3Code.GDc44Objects1= [];
gdjs.Scene3Code.GDc44Objects2= [];
gdjs.Scene3Code.GDc55Objects1= [];
gdjs.Scene3Code.GDc55Objects2= [];

gdjs.Scene3Code.conditionTrue_0 = {val:false};
gdjs.Scene3Code.condition0IsTrue_0 = {val:false};
gdjs.Scene3Code.condition1IsTrue_0 = {val:false};
gdjs.Scene3Code.condition2IsTrue_0 = {val:false};


gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene3Code.GDb1Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene3Code.GDb2Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene3Code.GDb3Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene3Code.GDb4Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb5Objects1Objects = Hashtable.newFrom({"b5": gdjs.Scene3Code.GDb5Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc1Objects1Objects = Hashtable.newFrom({"c1": gdjs.Scene3Code.GDc1Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc2Objects1Objects = Hashtable.newFrom({"c2": gdjs.Scene3Code.GDc2Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc3Objects1Objects = Hashtable.newFrom({"c3": gdjs.Scene3Code.GDc3Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc4Objects1Objects = Hashtable.newFrom({"c4": gdjs.Scene3Code.GDc4Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc5Objects1Objects = Hashtable.newFrom({"c5": gdjs.Scene3Code.GDc5Objects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene3Code.GDnextObjects1});
gdjs.Scene3Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c11"), gdjs.Scene3Code.GDc11Objects1);
gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Scene3Code.GDc2Objects1);
gdjs.copyArray(runtimeScene.getObjects("c22"), gdjs.Scene3Code.GDc22Objects1);
gdjs.copyArray(runtimeScene.getObjects("c3"), gdjs.Scene3Code.GDc3Objects1);
gdjs.copyArray(runtimeScene.getObjects("c33"), gdjs.Scene3Code.GDc33Objects1);
gdjs.copyArray(runtimeScene.getObjects("c4"), gdjs.Scene3Code.GDc4Objects1);
gdjs.copyArray(runtimeScene.getObjects("c44"), gdjs.Scene3Code.GDc44Objects1);
gdjs.copyArray(runtimeScene.getObjects("c5"), gdjs.Scene3Code.GDc5Objects1);
gdjs.copyArray(runtimeScene.getObjects("c55"), gdjs.Scene3Code.GDc55Objects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene3Code.GDnextObjects1);
{for(var i = 0, len = gdjs.Scene3Code.GDc2Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc3Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc4Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc5Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc11Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc11Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc22Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc22Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc33Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc33Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc44Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc44Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc55Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc55Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDnextObjects1[i].hide();
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene3Code.GDb1Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene3Code.GDb2Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene3Code.GDb3Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene3Code.GDb4Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b5"), gdjs.Scene3Code.GDb5Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDb5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c1"), gdjs.Scene3Code.GDc1Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDc1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c11"), gdjs.Scene3Code.GDc11Objects1);
gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Scene3Code.GDc2Objects1);
gdjs.copyArray(runtimeScene.getObjects("img12"), gdjs.Scene3Code.GDimg12Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDc1Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDimg12Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDimg12Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc11Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc11Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc2Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc2Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Scene3Code.GDc2Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c11"), gdjs.Scene3Code.GDc11Objects1);
/* Reuse gdjs.Scene3Code.GDc2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c22"), gdjs.Scene3Code.GDc22Objects1);
gdjs.copyArray(runtimeScene.getObjects("c3"), gdjs.Scene3Code.GDc3Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDc2Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc11Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc11Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc22Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc22Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc3Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc3Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c3"), gdjs.Scene3Code.GDc3Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c22"), gdjs.Scene3Code.GDc22Objects1);
/* Reuse gdjs.Scene3Code.GDc3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c33"), gdjs.Scene3Code.GDc33Objects1);
gdjs.copyArray(runtimeScene.getObjects("c4"), gdjs.Scene3Code.GDc4Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDc3Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc22Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc22Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc33Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc33Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc4Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc4Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c4"), gdjs.Scene3Code.GDc4Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c33"), gdjs.Scene3Code.GDc33Objects1);
/* Reuse gdjs.Scene3Code.GDc4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c44"), gdjs.Scene3Code.GDc44Objects1);
gdjs.copyArray(runtimeScene.getObjects("c5"), gdjs.Scene3Code.GDc5Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDc4Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc33Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc33Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc44Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc44Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc5Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc5Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c5"), gdjs.Scene3Code.GDc5Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDc5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c44"), gdjs.Scene3Code.GDc44Objects1);
/* Reuse gdjs.Scene3Code.GDc5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c55"), gdjs.Scene3Code.GDc55Objects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene3Code.GDnextObjects1);
{for(var i = 0, len = gdjs.Scene3Code.GDc5Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc44Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc44Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDc55Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDc55Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDnextObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene3Code.GDnextObjects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDnextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}}

}


{


{
}

}


};

gdjs.Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene3Code.GDwhiteObjects1.length = 0;
gdjs.Scene3Code.GDwhiteObjects2.length = 0;
gdjs.Scene3Code.GDb1Objects1.length = 0;
gdjs.Scene3Code.GDb1Objects2.length = 0;
gdjs.Scene3Code.GDb2Objects1.length = 0;
gdjs.Scene3Code.GDb2Objects2.length = 0;
gdjs.Scene3Code.GDb3Objects1.length = 0;
gdjs.Scene3Code.GDb3Objects2.length = 0;
gdjs.Scene3Code.GDb4Objects1.length = 0;
gdjs.Scene3Code.GDb4Objects2.length = 0;
gdjs.Scene3Code.GDditoeduObjects1.length = 0;
gdjs.Scene3Code.GDditoeduObjects2.length = 0;
gdjs.Scene3Code.GDb5Objects1.length = 0;
gdjs.Scene3Code.GDb5Objects2.length = 0;
gdjs.Scene3Code.GDimg12Objects1.length = 0;
gdjs.Scene3Code.GDimg12Objects2.length = 0;
gdjs.Scene3Code.GDc1Objects1.length = 0;
gdjs.Scene3Code.GDc1Objects2.length = 0;
gdjs.Scene3Code.GDc2Objects1.length = 0;
gdjs.Scene3Code.GDc2Objects2.length = 0;
gdjs.Scene3Code.GDc3Objects1.length = 0;
gdjs.Scene3Code.GDc3Objects2.length = 0;
gdjs.Scene3Code.GDc4Objects1.length = 0;
gdjs.Scene3Code.GDc4Objects2.length = 0;
gdjs.Scene3Code.GDc5Objects1.length = 0;
gdjs.Scene3Code.GDc5Objects2.length = 0;
gdjs.Scene3Code.GDc11Objects1.length = 0;
gdjs.Scene3Code.GDc11Objects2.length = 0;
gdjs.Scene3Code.GDc22Objects1.length = 0;
gdjs.Scene3Code.GDc22Objects2.length = 0;
gdjs.Scene3Code.GDc33Objects1.length = 0;
gdjs.Scene3Code.GDc33Objects2.length = 0;
gdjs.Scene3Code.GDnextObjects1.length = 0;
gdjs.Scene3Code.GDnextObjects2.length = 0;
gdjs.Scene3Code.GDc44Objects1.length = 0;
gdjs.Scene3Code.GDc44Objects2.length = 0;
gdjs.Scene3Code.GDc55Objects1.length = 0;
gdjs.Scene3Code.GDc55Objects2.length = 0;

gdjs.Scene3Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene3Code'] = gdjs.Scene3Code;
