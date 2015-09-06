var toggler = document.getElementById('toggler');
var menu = document.getElementById("menu");

toggler.onclick = function (e) {
    e.preventDefault();
    toggler.classList.toggle('toggler--close');
  menu.classList.toggle("main-nav__vertical");
  }
  

/*
var toggler = document.getElementById('toggler');
var header = document.getElementById('header');
var menu = document.getElementById('menu');

toggler.onclick = function (e) {
  e.preventDefault();
  toggler.classList.toggle('menu-toggler--close');
  menu.classList.toggle('main-nav--vertical');
  header.classList.toggle('page-header__menu--blue');
}
*/
