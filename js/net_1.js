//main部分
let flag = 0 ;
let imgList = ["img/net_1/back_0.svg", "img/net_1/back_1.svg", "img/net_1/back_2.svg", "img/net_1/back_3.svg", "img/net_1/back_4.svg"];

function back(){
    if(flag > 0){
        flag--;
    }
    console.log(flag);
    mainEvent(flag);
}
function next(){
    if(flag < 10){
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
function mainEvent(f){
    switch(f){
        case 0:
          document.querySelector('#back').src = imgList[0];
            break;
        case 1:
          document.querySelector('#back').src = imgList[1];
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