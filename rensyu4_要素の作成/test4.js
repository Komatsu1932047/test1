function insertItem(){
    var container = document.getElementById("container");
    var item = document.createElement("li"); //step1
    item.textContent = "hello"; //step2
    container.appendChild(item); //step3
}
function removeItem(){
    var container = document.getElementById("container");
    var item = container.lastChild;//step4
    if(item){
        container.removeChild(item); //step5
    }
}