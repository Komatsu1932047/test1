//main部分
let flag = 0 ;
let imgList = ["img/net_1/back_0.svg", "img/net_1/back_1.svg", "img/net_1/back_2.svg", "img/net_1/back_3.svg", "img/net_1/back_4.svg"];
let num = 0;
function back(){
    if(flag > 0){
        flag--;
    }
    console.log(flag);
    mainEvent(flag);
}
function next(){
    if(flag < 3){
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
function imageUpdate(){
  document.querySelector('#back').src = imgList[num];
}
function mainEvent(f){
    switch(f){
        case 0:
          num=0;
          imageUpdate();
          break;
        case 1:
          num=1;
          imageUpdate();
          num=2;
          setTimeout(imageUpdate, 300);
          break;
        case 2:
          num=3;
          imageUpdate();
          num=4;
          setTimeout(imageUpdate, 300);
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
  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
})