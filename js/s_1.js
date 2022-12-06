
let flag = 0 ;
let imgList = ["img/s_1/n-1.svg", "img/s_1/111.svg", "img/s_1/112.svg", "img/s_1/121.svg", "img/s_1/122.svg", "img/s_1/211.svg", "img/s_1/212.svg", "img/s_1/221.svg", "img/s_1/222.svg"];
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
  const mac1 = document.querySelectorAll('.MAC1');
  const mac2 = document.querySelectorAll('.MAC2');
  const mac3 = document.querySelectorAll('.MAC3');
  const mac4 = document.querySelectorAll('.MAC4');
  
  var ip_a = document.querySelector( '#ip-a' ); // 追加する先の要素を取得
  ip_a.textContent=ip1[0].value+'.'+ip1[1].value+'.'+ip1[2].value+'.'+ip1[3].value;
  
  let img = document.querySelector( '.cone1:checked' ).value + document.querySelector( '.cone2:checked' ).value + document.querySelector( '.cone3:checked' ).value;
  console.log( img );
  switch(img){
    case "111":
      document.querySelector('#back').src = imgList[1];
    break;
    case "112":
      document.querySelector('#back').src = imgList[2];
    break;
    case "121":
      document.querySelector('#back').src = imgList[3];
    break;
    case "122":
      document.querySelector('#back').src = imgList[4];
    break;
    case "211":
      document.querySelector('#back').src = imgList[5];
    break;
    case "212":
      document.querySelector('#back').src = imgList[6];
    break;
    case "221":
      document.querySelector('#back').src = imgList[7];
    break;
    case "222":
      document.querySelector('#back').src = imgList[8];
    break;
  }
  flag=1;
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
          //tabShow(f);
          //imageUpdate(1);
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