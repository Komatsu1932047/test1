var colors = ["red", "blue", "yellow", "green"];
var index = 0;
function changeColor(){
    document.getElementById("ufo").style.color = colors[index];
    if(++index >= colors.length){
        index = 0;
    }
}