
let flag = 0 ;
//let imgList = ["img/net_1/back_0.svg", "img/net_1/back_1.svg", "img/net_1/back_2.svg", "img/net_1/back_3.svg", "img/net_1/back_4.svg"];
let imgList = ["img/new/1.svg", "img/new/2.svg", "img/new/3.svg", "img/new/4.svg"];
//let num = 0;
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
  document.querySelector('#back').src = imgList[n];
}
function tabShow(t){
  tab[t].classList.add("active");
}
function mainEvent(f){
    switch(f){
        case 0:
          imageUpdate(0);
          break;
        case 1:
          tabShow(1);
          imageUpdate(1);
          //setTimeout(imageUpdate, 300, 2);
          break;
        case 2:
          tabShow(2);
          imageUpdate(2);
          //setTimeout(imageUpdate, 300, 4);
          break;
        case 3:
            imageUpdate(3);
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