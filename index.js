const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.center-nav');

function menuContent() {
   hamburger.classList.toggle('show');
   menu.classList.toggle('show');
   close.classList.toggle('show');
   documnet.querySelector('.cover').classList.toggle('show');
}

hamburger.addEventListener('click', menuContent);
close.addEventListener('click', menuContent);