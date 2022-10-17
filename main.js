const menuEmail = document.querySelector('.navbar-email');
const menuShoppingcartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingcartIcon.addEventListener('click', toggleShoppingcartAside);

function toggleDesktopMenu(){
  const isAsideMenuClosed = aside.classList.contains('inactive')
  desktopMenu.classList.toggle('inactive');
  if (!isAsideMenuClosed){
    aside.classList.add('inactive');
  }
}

function toggleMobileMenu(){
  const isAsideMenuClosed = aside.classList.contains('inactive');
  mobileMenu.classList.toggle('inactive');
  if (!isAsideMenuClosed){
    aside.classList.add('inactive');
  }
}

function toggleShoppingcartAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed || !isDesktopMenuClosed){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');

}