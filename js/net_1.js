//main部分
flag = 0 ;
const ya = document.querySelectorAll('.ya');
function back(){
    console.log(flag);
    if(flag > 0){
        flag--;
    }
    mainEvent(flag);
}
function next(){
    console.log(flag);
    if(flag < 10){
        flag++;
    }
    mainEvent(flag);
}
function mainEvent(f){
    switch(f){
        case 0:
            ya[0].classList.add("none");
            ya[0].classList.remove("opacity");
            break;
        case 1:
            ya[0].classList.remove("none");
            ya[0].classList.add("opacity");
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