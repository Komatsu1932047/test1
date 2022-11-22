
let flag = 0 ;
let imgList = ["img/net_2/2-1.svg", "img/net_2/2-2-1.svg", "img/net_2/2-2-2.svg", "img/net_2/2-3-1.svg", "img/net_2/2-3-2.svg", "img/net_2/2-4-1.svg", "img/net_2/2-4-2.svg", "img/net_2/2-5-1.svg", "img/net_2/2-5-2.svg", "img/net_2/2-6-1.svg", "img/net_2/2-6-2.svg", "img/net_2/2-7-1.svg", "img/net_2/2-7-2.svg", "img/net_2/2-8.svg"];
//let num = 0;
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
          tabShow(f);
          break;
        case 1:
          tabShow(f);
          imageUpdate(1);
          setTimeout(imageUpdate, 300, 2);
          break;
        case 2:
          tabShow(f);
          imageUpdate(3);
          setTimeout(imageUpdate, 300, 4);
          break;
        case 3:
          tabShow(f);
          imageUpdate(5);
          setTimeout(imageUpdate, 300, 6);
          break;
        case 4:
          tabShow(f);
          imageUpdate(7);
          setTimeout(imageUpdate, 300, 8);
          break;
        case 5:
          tabShow(f);
          imageUpdate(9);
          setTimeout(imageUpdate, 300, 10);
          break;
        case 6:
          tabShow(f);
          imageUpdate(11);
          setTimeout(imageUpdate, 300, 12);
          break;
        case 7:
          tabShow(f);
          imageUpdate(13);
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