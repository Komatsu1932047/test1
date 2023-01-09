
let flag = 0 ;
let imgList = ["img/net_2/2-1.svg", "img/net_2/2-2-1.svg", "img/net_2/2-3-1.svg","img/net_2/2-4-1.svg", "img/net_2/2-5-1.svg", "img/net_2/2-6-1.svg", "img/net_2/2-7-1.svg", "img/net_2/2-8.svg"];
//let imgList = ["img/net_2/2-1.svg", "img/net_2/2-2-1.svg", "img/net_2/2-2-2.svg", "img/net_2/2-3-1.svg", "img/net_2/2-3-2.svg", "img/net_2/2-4-1.svg", "img/net_2/2-4-2.svg", "img/net_2/2-5-1.svg", "img/net_2/2-5-2.svg", "img/net_2/2-6-1.svg", "img/net_2/2-6-2.svg", "img/net_2/2-7-1.svg", "img/net_2/2-7-2.svg", "img/net_2/2-8.svg"];
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
    if(flag < 7){
        flag++;
    }
    console.log(flag);
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
          animUpdate(1);
          break;
        case 2:
          tabShow(f);
          imageUpdate(2);
          animUpdate(2);
          break;
        case 3:
          tabShow(f);
          imageUpdate(3);
          animUpdate(3);
          break;
        case 4:
          tabShow(f);
          imageUpdate(4);
          animUpdate(4);
          break;
        case 5:
          tabShow(f);
          imageUpdate(5);
          animUpdate(5);
          break;
        case 6:
          tabShow(f);
          imageUpdate(6);
          animUpdate(6);
          break;
        case 7:
          tabShow(f);
          imageUpdate(7);
          animUpdate(0);
          break;
    }
}
//lanwan,
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