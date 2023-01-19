
let flag = 0 ;
//let imgList = ["img/net_1/back_0.svg", "img/net_1/back_1.svg", "img/net_1/back_2.svg", "img/net_1/back_3.svg", "img/net_1/back_4.svg"];
let imgList = ["img/new/1.svg", "img/new/2.svg", "img/new/3.svg", "img/new/4.svg"];
let animList = ["img/net_1/1-1.svg", "img/net_1/1-2.svg", "img/net_1/1-3.svg"]
let time = 500;
function back(){
    if(flag > 0){
        flag--;
    }
    console.log(flag);
    mainEvent(flag);
}
function next(){
    if(flag < 5){
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
  flag=2;
  console.log(flag);
  mainEvent(flag);
}
function imageUpdate(n){
  document.querySelector('#back').classList.remove("hidden");
}
function animUpdate(n){
  document.querySelector('#back').classList.add("hidden");
  document.querySelector('#anim').src = animList[n];
  let anim=document.querySelector('#anim');
  //anim.classList.add("opacity");
  //setTimeout(function(){ anim.classList.remove("opacity");}, 1000);
}
function tabShow(t){
  tab.forEach(array=> {
    array.classList.remove("active");
  }); 
  tab[t].classList.add("active");
}
function mainEvent(f){
  //console.log(f);
    switch(f){
        case 0:
          tabShow(f);
          imageUpdate(f);
        break;
        case 1:
          animUpdate(f-1);
          tabShow(f);
        break;
        case 2:
          tabShow(f);
          animUpdate(f-1);
          //setTimeout(imageUpdate, 300, 4);
        break;
        case 3:
          animUpdate(f-1);
          tabShow(f);
        break;
        case 4:
          tabShow(f);
          imageUpdate(f);
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
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', event => {
      event.preventDefault();
      tabTrigger.show();
    })
})