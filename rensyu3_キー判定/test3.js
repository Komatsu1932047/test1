function keydown(e) {
    var s = "";
    switch (e.keyCode){
        case 37: s = "左";break;
        case 38: s = "上";break;
        case 39: s = "右";break;
        case 40: s = "下";break;
        default: s = "それ以外";break;
    }
    document.getElementById("info").textContent = s;
}
window.addEventListener('keydown',keydown);