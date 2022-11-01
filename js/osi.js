//右部Offcanvas
document.querySelector('.offcanvas-on').onclick = function () {
  new bootstrap.Offcanvas('#Offcanvas_1').toggle();
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
