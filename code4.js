gdjs.Scene4Code = {};
gdjs.Scene4Code.GDwhiteObjects1= [];
gdjs.Scene4Code.GDwhiteObjects2= [];
gdjs.Scene4Code.GDb1Objects1= [];
gdjs.Scene4Code.GDb1Objects2= [];
gdjs.Scene4Code.GDb2Objects1= [];
gdjs.Scene4Code.GDb2Objects2= [];
gdjs.Scene4Code.GDb3Objects1= [];
gdjs.Scene4Code.GDb3Objects2= [];
gdjs.Scene4Code.GDb4Objects1= [];
gdjs.Scene4Code.GDb4Objects2= [];
gdjs.Scene4Code.GDditoeduObjects1= [];
gdjs.Scene4Code.GDditoeduObjects2= [];
gdjs.Scene4Code.GDb5Objects1= [];
gdjs.Scene4Code.GDb5Objects2= [];
gdjs.Scene4Code.GDimg15Objects1= [];
gdjs.Scene4Code.GDimg15Objects2= [];
gdjs.Scene4Code.GDtutoObjects1= [];
gdjs.Scene4Code.GDtutoObjects2= [];
gdjs.Scene4Code.GDimg16Objects1= [];
gdjs.Scene4Code.GDimg16Objects2= [];
gdjs.Scene4Code.GDc16Objects1= [];
gdjs.Scene4Code.GDc16Objects2= [];
gdjs.Scene4Code.GDc17Objects1= [];
gdjs.Scene4Code.GDc17Objects2= [];
gdjs.Scene4Code.GDimg17Objects1= [];
gdjs.Scene4Code.GDimg17Objects2= [];
gdjs.Scene4Code.GDimg18Objects1= [];
gdjs.Scene4Code.GDimg18Objects2= [];
gdjs.Scene4Code.GDconObjects1= [];
gdjs.Scene4Code.GDconObjects2= [];
gdjs.Scene4Code.GDimg19Objects1= [];
gdjs.Scene4Code.GDimg19Objects2= [];
gdjs.Scene4Code.GDyesObjects1= [];
gdjs.Scene4Code.GDyesObjects2= [];

gdjs.Scene4Code.conditionTrue_0 = {val:false};
gdjs.Scene4Code.condition0IsTrue_0 = {val:false};
gdjs.Scene4Code.condition1IsTrue_0 = {val:false};
gdjs.Scene4Code.condition2IsTrue_0 = {val:false};


gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene4Code.GDb1Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene4Code.GDb2Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene4Code.GDb3Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene4Code.GDb4Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb5Objects1Objects = Hashtable.newFrom({"b5": gdjs.Scene4Code.GDb5Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDtutoObjects1Objects = Hashtable.newFrom({"tuto": gdjs.Scene4Code.GDtutoObjects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDc16Objects1Objects = Hashtable.newFrom({"c16": gdjs.Scene4Code.GDc16Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDc17Objects1Objects = Hashtable.newFrom({"c17": gdjs.Scene4Code.GDc17Objects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDconObjects1Objects = Hashtable.newFrom({"con": gdjs.Scene4Code.GDconObjects1});
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDyesObjects1Objects = Hashtable.newFrom({"yes": gdjs.Scene4Code.GDyesObjects1});
gdjs.Scene4Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c16"), gdjs.Scene4Code.GDc16Objects1);
gdjs.copyArray(runtimeScene.getObjects("c17"), gdjs.Scene4Code.GDc17Objects1);
gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.Scene4Code.GDconObjects1);
gdjs.copyArray(runtimeScene.getObjects("img16"), gdjs.Scene4Code.GDimg16Objects1);
gdjs.copyArray(runtimeScene.getObjects("img17"), gdjs.Scene4Code.GDimg17Objects1);
gdjs.copyArray(runtimeScene.getObjects("img18"), gdjs.Scene4Code.GDimg18Objects1);
gdjs.copyArray(runtimeScene.getObjects("img19"), gdjs.Scene4Code.GDimg19Objects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Scene4Code.GDyesObjects1);
{for(var i = 0, len = gdjs.Scene4Code.GDimg16Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg16Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg17Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg17Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg18Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg18Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg19Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg19Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDc16Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDc16Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDc17Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDc17Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDconObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDconObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDyesObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDyesObjects1[i].hide();
}
}}

}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene4Code.GDb1Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene4Code.GDb2Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene4Code.GDb3Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene4Code.GDb4Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b5"), gdjs.Scene4Code.GDb5Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDb5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tuto"), gdjs.Scene4Code.GDtutoObjects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDtutoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c16"), gdjs.Scene4Code.GDc16Objects1);
gdjs.copyArray(runtimeScene.getObjects("img15"), gdjs.Scene4Code.GDimg15Objects1);
gdjs.copyArray(runtimeScene.getObjects("img16"), gdjs.Scene4Code.GDimg16Objects1);
/* Reuse gdjs.Scene4Code.GDtutoObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDtutoObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDtutoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg15Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg15Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg16Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg16Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDc16Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDc16Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c16"), gdjs.Scene4Code.GDc16Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDc16Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDc16Objects1 */
gdjs.copyArray(runtimeScene.getObjects("c17"), gdjs.Scene4Code.GDc17Objects1);
gdjs.copyArray(runtimeScene.getObjects("img16"), gdjs.Scene4Code.GDimg16Objects1);
gdjs.copyArray(runtimeScene.getObjects("img17"), gdjs.Scene4Code.GDimg17Objects1);
{for(var i = 0, len = gdjs.Scene4Code.GDc16Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDc16Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg16Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg16Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg17Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg17Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDc17Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDc17Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c17"), gdjs.Scene4Code.GDc17Objects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDc17Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDc17Objects1 */
gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.Scene4Code.GDconObjects1);
gdjs.copyArray(runtimeScene.getObjects("img17"), gdjs.Scene4Code.GDimg17Objects1);
gdjs.copyArray(runtimeScene.getObjects("img18"), gdjs.Scene4Code.GDimg18Objects1);
{for(var i = 0, len = gdjs.Scene4Code.GDc17Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDc17Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg17Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg17Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg18Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg18Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDconObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDconObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.Scene4Code.GDconObjects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDconObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDconObjects1 */
gdjs.copyArray(runtimeScene.getObjects("img18"), gdjs.Scene4Code.GDimg18Objects1);
gdjs.copyArray(runtimeScene.getObjects("img19"), gdjs.Scene4Code.GDimg19Objects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Scene4Code.GDyesObjects1);
{for(var i = 0, len = gdjs.Scene4Code.GDconObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDconObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg18Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg18Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDimg19Objects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDimg19Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDyesObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDyesObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Scene4Code.GDyesObjects1);

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDyesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5", true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}}

}


{


{
}

}


};

gdjs.Scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene4Code.GDwhiteObjects1.length = 0;
gdjs.Scene4Code.GDwhiteObjects2.length = 0;
gdjs.Scene4Code.GDb1Objects1.length = 0;
gdjs.Scene4Code.GDb1Objects2.length = 0;
gdjs.Scene4Code.GDb2Objects1.length = 0;
gdjs.Scene4Code.GDb2Objects2.length = 0;
gdjs.Scene4Code.GDb3Objects1.length = 0;
gdjs.Scene4Code.GDb3Objects2.length = 0;
gdjs.Scene4Code.GDb4Objects1.length = 0;
gdjs.Scene4Code.GDb4Objects2.length = 0;
gdjs.Scene4Code.GDditoeduObjects1.length = 0;
gdjs.Scene4Code.GDditoeduObjects2.length = 0;
gdjs.Scene4Code.GDb5Objects1.length = 0;
gdjs.Scene4Code.GDb5Objects2.length = 0;
gdjs.Scene4Code.GDimg15Objects1.length = 0;
gdjs.Scene4Code.GDimg15Objects2.length = 0;
gdjs.Scene4Code.GDtutoObjects1.length = 0;
gdjs.Scene4Code.GDtutoObjects2.length = 0;
gdjs.Scene4Code.GDimg16Objects1.length = 0;
gdjs.Scene4Code.GDimg16Objects2.length = 0;
gdjs.Scene4Code.GDc16Objects1.length = 0;
gdjs.Scene4Code.GDc16Objects2.length = 0;
gdjs.Scene4Code.GDc17Objects1.length = 0;
gdjs.Scene4Code.GDc17Objects2.length = 0;
gdjs.Scene4Code.GDimg17Objects1.length = 0;
gdjs.Scene4Code.GDimg17Objects2.length = 0;
gdjs.Scene4Code.GDimg18Objects1.length = 0;
gdjs.Scene4Code.GDimg18Objects2.length = 0;
gdjs.Scene4Code.GDconObjects1.length = 0;
gdjs.Scene4Code.GDconObjects2.length = 0;
gdjs.Scene4Code.GDimg19Objects1.length = 0;
gdjs.Scene4Code.GDimg19Objects2.length = 0;
gdjs.Scene4Code.GDyesObjects1.length = 0;
gdjs.Scene4Code.GDyesObjects2.length = 0;

gdjs.Scene4Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene4Code'] = gdjs.Scene4Code;
