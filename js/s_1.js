
let flag = 0 ;
let imgList = ["img/s_1/n-1.svg", "img/s_1/111.svg", "img/s_1/112.svg", "img/s_1/121.svg", "img/s_1/122.svg", "img/s_1/211.svg", "img/s_1/212.svg", "img/s_1/221.svg", "img/s_1/222.svg"];
let animList = ["img/net_2/0.svg", "img/net_2/1.svg", "img/net_2/2.svg", "img/net_2/3.svg", "img/net_2/4.svg", "img/net_2/5.svg", "img/net_2/6.svg", ]
let time = 500;
let obj = document.querySelector( '.obj' );
function start(){
  const ip1 = document.querySelectorAll('.IP1');
  const ip2 = document.querySelectorAll('.IP2');
  const mac1 = document.querySelectorAll('.MAC1');
  const mac2 = document.querySelectorAll('.MAC2');
  const mac3 = document.querySelectorAll('.MAC3');
  const mac4 = document.querySelectorAll('.MAC4');
  let ip_a = document.querySelector( '#ip-a' );
  let ip_b = document.querySelector( '#ip-b' );
  ip_a.textContent=ip1[0].value+'.'+ip1[1].value+'.'+ip1[2].value+'.'+ip1[3].value;
  ip_b.textContent=ip2[0].value+'.'+ip2[1].value+'.'+ip2[2].value+'.'+ip2[3].value;
  let img = document.querySelector( '.cone1:checked' ).value + document.querySelector( '.cone2:checked' ).value + document.querySelector( '.cone3:checked' ).value;
  switch(img){
    case "111":
      imageUpdate(1);
    break;
    case "112":
      imageUpdate(5);
    break;
    case "121":
      imageUpdate(3);
    break;
    case "122":
      imageUpdate(7);
    break;
    case "211":
      imageUpdate(2);
    break;
    case "212":
      imageUpdate(6);
    break;
    case "221":
      imageUpdate(4);
    break;
    case "222":
      imageUpdate(8);
    break;
  }
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
function macUpdate(n){
  let mac_a = document.querySelector( '#mac-a' );
  let mac_b = document.querySelector( '#mac-b' );
  let mac1;
  let mac2;
  switch(n){
    case 1:
      mac1 = document.querySelectorAll('.MAC1');
      mac2 = document.querySelectorAll('.MAC2');
    break;
    case 2:
      mac1 = document.querySelectorAll('.MAC2');
      mac2 = document.querySelectorAll('.MAC3');
    break;
    case 3:
      mac1 = document.querySelectorAll('.MAC3');
      mac2 = document.querySelectorAll('.MAC4');
    break;
  }
  mac_a.textContent=mac1[0].value+':'+mac1[1].value+':'+mac1[2].value+':'+mac1[3].value+':'+mac1[4].value+':'+mac1[5].value;
  mac_b.textContent=mac2[0].value+':'+mac2[1].value+':'+mac2[2].value+':'+mac2[3].value+':'+mac2[4].value+':'+mac2[5].value;
}
function imageUpdate(n){
  document.querySelector('#back').src = imgList[n];
}
/*function animUpdate(n){
  document.querySelector('#anim').src = animList[n];
  let anim=document.querySelector('#anim');
  anim.classList.add("opacity");
  setTimeout(function(){ anim.classList.remove("opacity");}, 1000);

}*/
function tabShow(t){
  tab.forEach(array=> {
    array.classList.remove("active");
  }); 
  tab[t].classList.add("active");
}
function animUpdate(n){
  point = document.querySelectorAll('.point');
  point.forEach(array=> {
    array.classList.remove("opacity");
  }); 
  if(n-1 != -1){
    point[n-1].classList.add("opacity");
  }
}
function mainEvent(f){
    flag=f;
    switch(f){
        case 0:
          imageUpdate(0);
          obj.classList.add("hidden");
          animUpdate(0);
          //tabShow(f);
        break;
        case 1:
          obj.classList.remove("hidden");
          start();
          macUpdate(f);
          //tabShow(f);
          //imageUpdate(1);
          animUpdate(1);
        break;
        case 2:
          start();
          obj.classList.remove("hidden");
          macUpdate(f);
          //tabShow(f);
          //imageUpdate(2);
          animUpdate(2);
        break;
        case 3:
          start();
          obj.classList.remove("hidden");
          macUpdate(f);
          //tabShow(f);
          //imageUpdate(2);
          animUpdate(3);
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