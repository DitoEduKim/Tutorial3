gdjs.Scene10Code = {};
gdjs.Scene10Code.GDwhiteObjects1= [];
gdjs.Scene10Code.GDwhiteObjects2= [];
gdjs.Scene10Code.GDb1Objects1= [];
gdjs.Scene10Code.GDb1Objects2= [];
gdjs.Scene10Code.GDb2Objects1= [];
gdjs.Scene10Code.GDb2Objects2= [];
gdjs.Scene10Code.GDb3Objects1= [];
gdjs.Scene10Code.GDb3Objects2= [];
gdjs.Scene10Code.GDb4Objects1= [];
gdjs.Scene10Code.GDb4Objects2= [];
gdjs.Scene10Code.GDditoeduObjects1= [];
gdjs.Scene10Code.GDditoeduObjects2= [];
gdjs.Scene10Code.GDb5Objects1= [];
gdjs.Scene10Code.GDb5Objects2= [];
gdjs.Scene10Code.GDimg56Objects1= [];
gdjs.Scene10Code.GDimg56Objects2= [];
gdjs.Scene10Code.GDimg57Objects1= [];
gdjs.Scene10Code.GDimg57Objects2= [];
gdjs.Scene10Code.GDimg58Objects1= [];
gdjs.Scene10Code.GDimg58Objects2= [];
gdjs.Scene10Code.GDimg59Objects1= [];
gdjs.Scene10Code.GDimg59Objects2= [];
gdjs.Scene10Code.GDc56Objects1= [];
gdjs.Scene10Code.GDc56Objects2= [];
gdjs.Scene10Code.GDc57Objects1= [];
gdjs.Scene10Code.GDc57Objects2= [];
gdjs.Scene10Code.GDc58Objects1= [];
gdjs.Scene10Code.GDc58Objects2= [];
gdjs.Scene10Code.GDc59Objects1= [];
gdjs.Scene10Code.GDc59Objects2= [];

gdjs.Scene10Code.conditionTrue_0 = {val:false};
gdjs.Scene10Code.condition0IsTrue_0 = {val:false};
gdjs.Scene10Code.condition1IsTrue_0 = {val:false};
gdjs.Scene10Code.condition2IsTrue_0 = {val:false};


gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene10Code.GDb1Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene10Code.GDb2Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene10Code.GDb3Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene10Code.GDb4Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb5Objects1Objects = Hashtable.newFrom({"b5": gdjs.Scene10Code.GDb5Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc56Objects1Objects = Hashtable.newFrom({"c56": gdjs.Scene10Code.GDc56Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc57Objects1Objects = Hashtable.newFrom({"c57": gdjs.Scene10Code.GDc57Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc58Objects1Objects = Hashtable.newFrom({"c58": gdjs.Scene10Code.GDc58Objects1});
gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc59Objects1Objects = Hashtable.newFrom({"c59": gdjs.Scene10Code.GDc59Objects1});
gdjs.Scene10Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c57"), gdjs.Scene10Code.GDc57Objects1);
gdjs.copyArray(runtimeScene.getObjects("c58"), gdjs.Scene10Code.GDc58Objects1);
gdjs.copyArray(runtimeScene.getObjects("c59"), gdjs.Scene10Code.GDc59Objects1);
gdjs.copyArray(runtimeScene.getObjects("img57"), gdjs.Scene10Code.GDimg57Objects1);
gdjs.copyArray(runtimeScene.getObjects("img58"), gdjs.Scene10Code.GDimg58Objects1);
gdjs.copyArray(runtimeScene.getObjects("img59"), gdjs.Scene10Code.GDimg59Objects1);
{for(var i = 0, len = gdjs.Scene10Code.GDimg57Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg57Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene10Code.GDimg58Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg58Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene10Code.GDimg59Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg59Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc57Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc57Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc58Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc58Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc59Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc59Objects1[i].hide();
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene10Code.GDb1Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene10Code.GDb2Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene10Code.GDb3Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene10Code.GDb4Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b5"), gdjs.Scene10Code.GDb5Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDb5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c56"), gdjs.Scene10Code.GDc56Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc56Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDc56Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c57"), gdjs.Scene10Code.GDc57Objects1);
gdjs.copyArray(runtimeScene.getObjects("img56"), gdjs.Scene10Code.GDimg56Objects1);
gdjs.copyArray(runtimeScene.getObjects("img57"), gdjs.Scene10Code.GDimg57Objects1);
{for(var i = 0, len = gdjs.Scene10Code.GDimg56Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg56Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc56Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc56Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDimg57Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg57Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc57Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc57Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c57"), gdjs.Scene10Code.GDc57Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc57Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDc57Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c58"), gdjs.Scene10Code.GDc58Objects1);
gdjs.copyArray(runtimeScene.getObjects("img57"), gdjs.Scene10Code.GDimg57Objects1);
gdjs.copyArray(runtimeScene.getObjects("img58"), gdjs.Scene10Code.GDimg58Objects1);
{for(var i = 0, len = gdjs.Scene10Code.GDimg57Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg57Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc57Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc57Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDimg58Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg58Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc58Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc58Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c58"), gdjs.Scene10Code.GDc58Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc58Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDc58Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c59"), gdjs.Scene10Code.GDc59Objects1);
gdjs.copyArray(runtimeScene.getObjects("img58"), gdjs.Scene10Code.GDimg58Objects1);
gdjs.copyArray(runtimeScene.getObjects("img59"), gdjs.Scene10Code.GDimg59Objects1);
{for(var i = 0, len = gdjs.Scene10Code.GDimg58Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg58Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc58Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc58Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDimg59Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDimg59Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDc59Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDc59Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c59"), gdjs.Scene10Code.GDc59Objects1);

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDc59Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", true);
}}

}


{


{
}

}


};

gdjs.Scene10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene10Code.GDwhiteObjects1.length = 0;
gdjs.Scene10Code.GDwhiteObjects2.length = 0;
gdjs.Scene10Code.GDb1Objects1.length = 0;
gdjs.Scene10Code.GDb1Objects2.length = 0;
gdjs.Scene10Code.GDb2Objects1.length = 0;
gdjs.Scene10Code.GDb2Objects2.length = 0;
gdjs.Scene10Code.GDb3Objects1.length = 0;
gdjs.Scene10Code.GDb3Objects2.length = 0;
gdjs.Scene10Code.GDb4Objects1.length = 0;
gdjs.Scene10Code.GDb4Objects2.length = 0;
gdjs.Scene10Code.GDditoeduObjects1.length = 0;
gdjs.Scene10Code.GDditoeduObjects2.length = 0;
gdjs.Scene10Code.GDb5Objects1.length = 0;
gdjs.Scene10Code.GDb5Objects2.length = 0;
gdjs.Scene10Code.GDimg56Objects1.length = 0;
gdjs.Scene10Code.GDimg56Objects2.length = 0;
gdjs.Scene10Code.GDimg57Objects1.length = 0;
gdjs.Scene10Code.GDimg57Objects2.length = 0;
gdjs.Scene10Code.GDimg58Objects1.length = 0;
gdjs.Scene10Code.GDimg58Objects2.length = 0;
gdjs.Scene10Code.GDimg59Objects1.length = 0;
gdjs.Scene10Code.GDimg59Objects2.length = 0;
gdjs.Scene10Code.GDc56Objects1.length = 0;
gdjs.Scene10Code.GDc56Objects2.length = 0;
gdjs.Scene10Code.GDc57Objects1.length = 0;
gdjs.Scene10Code.GDc57Objects2.length = 0;
gdjs.Scene10Code.GDc58Objects1.length = 0;
gdjs.Scene10Code.GDc58Objects2.length = 0;
gdjs.Scene10Code.GDc59Objects1.length = 0;
gdjs.Scene10Code.GDc59Objects2.length = 0;

gdjs.Scene10Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene10Code'] = gdjs.Scene10Code;
