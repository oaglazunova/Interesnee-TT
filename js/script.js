/* Hamburger */
var toggler = document.getElementById('toggler');

toggler.onclick = function (e) {
    var menu = document.getElementById("menu");

    e.preventDefault();
    toggler.classList.toggle('toggler--close');
    menu.classList.toggle("main-nav__vertical");
  }
  /* Hamburger end */



/* Dropdown menus 
var toggleUserMenu = document.getElementById("dropdown--user");
var menuUser = document.getElementById("menu--user");
var toggleBellMenu = document.getElementById("dropdown--bell");
var menuBell = document.getElementById("menu--bell");

toggleUserMenu.onclick = function (e) {
  e.preventDefault();
  if (menuBell.classList.contains("main-nav__dropdown-menu--show")) {
    menuBell.classList.remove("main-nav__dropdown-menu--show");
  }
  menuUser.classList.toggle("main-nav__dropdown-menu--show");
}

toggleBellMenu.onclick = function (e) {
  e.preventDefault();
  if (menuUser.classList.contains("main-nav__dropdown-menu--show")) {
    menuUser.classList.remove("main-nav__dropdown-menu--show");
  }
  menuBell.classList.toggle("main-nav__dropdown-menu--show");
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27 && (menuUser.classList.contains("main-nav__dropdown-menu--show") || menuBell.classList.contains("main-nav__dropdown-menu--show"))) {
    menuBell.classList.remove("main-nav__dropdown-menu--show");
    menuUser.classList.remove("main-nav__dropdown-menu--show");
  }
}, false);
 Dropdown menus end */



/* Table sorting: adapted from http://codereview.stackexchange.com/questions/37632/how-should-i-sort-an-html-table-with-javascript-in-a-more-efficient-manner */
var salesTbody, asc1 = 1;

window.onload = function () {
  salesTbody = document.getElementById("sales-tbody");
}

function sortTable(tbody, col, asc) {
  var rows = tbody.rows;
  var rlen = rows.length;
  var arr = new Array();
  var i, j, cells, clen;

  // fill the array with values from the table
  for (i = 0; i < rlen; i++) {
    cells = rows[i].cells;
    clen = cells.length;
    arr[i] = new Array();
    for (j = 0; j < clen; j++) {
      arr[i][j] = cells[j].innerHTML;
    }
  }
  // sort the array by the specified column number (col) and order (asc)
  arr.sort(function (a, b) {
    var retval = 0;
    var fA = parseFloat(a[col].replace(/[^0-9\.]+/g, ""));
    var fB = parseFloat(b[col].replace(/[^0-9\.]+/g, ""));

    if (a[col] != b[col]) {
      if ((fA == a[col].replace(/[^0-9\.]+/g, "")) && (fB == b[col].replace(/[^0-9\.]+/g, ""))) {
        retval = (fA > fB) ? asc : -1 * asc;
      } //numerical
      else {
        retval = (a[col].toLowerCase() > b[col].toLowerCase()) ? asc : -1 * asc;
        // retval = (a[col] > b[col]) ? asc : -1 * asc;
      }
    }
    return retval;
  });
  for (var rowidx = 0; rowidx < rlen; rowidx++) {
    for (var colidx = 0; colidx < arr[rowidx].length; colidx++) {
      tbody.rows[rowidx].cells[colidx].innerHTML = arr[rowidx][colidx];
    }
  }
}
/* Table sorting end */



/* Sorting arrows */
arrowToggler = function (self) {
  for (i = 0; i < self.childNodes.length; i++) {
    if ((self.childNodes[i].classList != undefined) && (self.childNodes[i].classList.contains("arrow"))) {
      self.childNodes[i].classList.toggle("arrow--reverse");
      break;
    }
  }
};
/* Sorting arrows end */



/* 'Select all' checkbox */
function toggle(source) {
  checkboxes = document.getElementsByName('checkbox');
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}
/* 'Select all' checkbox end */