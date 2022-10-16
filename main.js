const menuEmail = document.querySelector('.navbar-email');
const menuShoppingcartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingcartIcon.addEventListener('click', toggleShoppingcartAside)

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingcartAside(){
  aside.classList.toggle('inactive')
}