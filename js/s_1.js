
let flag = 0 ;
let imgList = ["img/s_1/s1-2.svg", "img/net_3/3-2.svg", "img/net_3/3-3.svg"];
let animList = ["img/net_2/0.svg", "img/net_2/1.svg", "img/net_2/2.svg", "img/net_2/3.svg", "img/net_2/4.svg", "img/net_2/5.svg", "img/net_2/6.svg", ]
let time = 500;
function back(){
    if(flag > 0){
        flag--;
    }
    console.log(flag);
    mainEvent(flag);
}
function next(){
    if(flag < 0){
        flag++;
    }
    console.log(flag);
    mainEvent(flag);
}
function start(){
  const ip1 = document.querySelectorAll('.IP1');
  const ip2 = document.querySelectorAll('.IP2');
  
  var ipa1 = document.querySelector( '#base01' ); // 追加する先の要素を取得
  ipa1.textContent=ip1[0].value+'.'+ip1[1].value+'.'+ip1[2].value+'.'+ip1[3].value;
  
  
  flag=0;
  mainEvent(flag);
}
function reset(){
  flag=0;
  console.log(flag);
  mainEvent(flag);
}
function end(){
  flag=7;
  console.log(flag);
  mainEvent(flag);
}
function imageUpdate(n){
  document.querySelector('#back').src = imgList[n];
}
function animUpdate(n){
  document.querySelector('#anim').src = animList[n];
  let anim=document.querySelector('#anim');
  anim.classList.add("opacity");
  setTimeout(function(){ anim.classList.remove("opacity");}, 1000);

}
function tabShow(t){
  tab.forEach(array=> {
    array.classList.remove("active");
  }); 
  tab[t].classList.add("active");
}
function mainEvent(f){
    flag=f;
    switch(f){
        case 0:
          imageUpdate(0);
          animUpdate(0);
          tabShow(f);
          break;
        case 1:
          tabShow(f);
          imageUpdate(1);
          //animUpdate(1);
          break;
        case 2:
          tabShow(f);
          imageUpdate(2);
          //animUpdate(2);
          break;
    }
}

//右部Offcanvas
const bsOffcanvas = new bootstrap.Offcanvas('#Offcanvas_1');
function canvasOn() {
  bsOffcanvas.show();
};
  //下部タブの操作
  const triggerTabList = document.querySelectorAll('#myTab button');
  let tab=document.querySelectorAll('.tab-pane');
  //triggerTabList.forEach(triggerEl => {
    //const tabTrigger = new bootstrap.Tab(triggerEl)
    //.addEventListener('click', event => {
      //event.preventDefault();
      //tabTrigger.show();
    //})
//})