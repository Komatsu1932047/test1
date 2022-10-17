//右部Offcanvas
document.querySelector('.offcanvas-on').onclick = function () {
  //event.preventDefault()
  new bootstrap.Offcanvas('#exampleOffcanvas').show();
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
