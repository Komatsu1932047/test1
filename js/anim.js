
//要素を参照する変数
const layer = document.querySelectorAll('.layer');
const layerLen = layer.length;
var flag = 0;
let n_flag = 1;
//layer4ボタンを押した時に呼び出される関数
function opacity() {
  //透明
  if (flag == 0) {
  layer[0].classList.add("opacity");
  flag = 1;
  }
  //透明なし
  else {
  layer[0].classList.remove("opacity");
  flag = 0;
  }
}
function next(){
  if(n_flag >= 0 && n_flag <= 3){
    layer[n_flag].classList.remove("visibility-hidden");
    n_flag++;
    console.log(n_flag);
    if(n_flag==4){
      n_flag--;
    }
  }
}
function back(){
  if(n_flag <= 3 && n_flag >= 0){
    layer[n_flag].classList.add("visibility-hidden");
    n_flag--;
    console.log(n_flag);
    if(n_flag==-1){
      n_flag++;
    }
  }
}