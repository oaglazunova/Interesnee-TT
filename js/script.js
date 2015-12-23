	/* Hamburger */
var toggler = document.getElementById('toggler');

toggler.onclick = function (e) {
    var menu = document.getElementById("menu");

    e.preventDefault();
    toggler.classList.toggle('toggler--close');
    menu.classList.toggle("main-nav__vertical");
  }
  /* Hamburger end */



/* Table sorting */
var salesTbody, asc1 = 1;

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
function arrowToggler(self) {
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



/* Pie-charts animation */
function doAnimate() {
  document.getElementById('chart-1').setAttribute('data-progress', 10);
  document.getElementById('chart-2').setAttribute('data-progress', 75);
  document.getElementById('chart-3').setAttribute('data-progress', 45);
  document.getElementById('chart-4').setAttribute('data-progress', 90);
}

window.onload = function () {
  salesTbody = document.getElementById("sales-tbody");
  doAnimate();
};
/* Pie-charts animation end */
