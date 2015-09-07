var toggler = document.getElementById('toggler');

toggler.onclick = function (e) {
  var menu = document.getElementById("menu");
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  menu.classList.toggle("main-nav__vertical");
}

var toggleUserMenu = document.getElementById("dropdown--user");

toggleUserMenu.onclick = function (e) {
  
var menuUser = document.getElementById("menu--user");
  console.log("click");
  e.preventDefault();
  menuUser.classList.toggle("main-nav__dropdown-menu--show");
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27 && menuUser.classList.contains("main-nav__dropdown-menu--show")) {
    menuUser.classList.remove("main-nav__dropdown-menu--show");
  }   
}, false);
