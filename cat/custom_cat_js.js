// From https://codepen.io/sdras/pen/gbERKQ

var features = "#mouth_1, #mouth_3, #mouth_4, #bow, #hat, #glasses_1, #glasses_2, #eye_1, #eye_2, #eye_3, #eye_4, #cat";

Draggable.create(features, {
    edgeResistance:1,
    throwProps:true
});