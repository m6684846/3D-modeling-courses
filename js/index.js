const BurgerBtn = document.querySelector('.header__burger')
  const menuClosed = document.querySelector('.menu__closed')
  const menuBurger = document.querySelector('.burger-menu__heder')
  const menuLinck = document.querySelectorAll('.burger-menu__link')

  BurgerBtn.addEventListener('click', function(){
    menuBurger.classList.add('burger-menu__heder--active')
   });

   menuClosed.addEventListener('click', function(){
    menuBurger.classList.remove('burger-menu__heder--active')
   });

 menuLinck.forEach(function(el) {
  el.addEventListener('click',function() {
    menuBurger.classList.remove('burger-menu__heder--active')

})

 })
