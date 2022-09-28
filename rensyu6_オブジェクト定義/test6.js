var ufo;
function init(){
    window.addEventListener("keydown", keydown);
    ufo = new UFO(document.getElementById("ufo"), 100);
    function keydown(e){
        if(e.keyCode == 37){
            ufo.moveLeft();
        }else if(e.keyCode == 39){
            ufo.moveRight();
        }
    }
    function UFO(_elem, _xpos){
        this.elem = _elem;
        this.xpos = _xpos;
        this.moveLeft = function(){
            this.xpos -= 10;
            this.elem.style.left = this.xpos + "px";
        }
        this.moveRight = function(){
            this.xpos += 10;
            this.elem.style.left = this.xpos + "px"
        }
        this.elem.style.left = this.xpos + "px"
    }
}