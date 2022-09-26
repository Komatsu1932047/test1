function checkEven(){
    var v = document.getElementById("number").value;
    var r = document.getElementById("result")
    if(isNaN(v)){
        r.textContent = v + "は数字ではありません";
    }
    else{
        r.textContent = (v % 2 == 0)? "偶数です" : "奇数です";
    }
}