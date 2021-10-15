// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-area");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});



// Get the modal
var modal = document.getElementById("myModal");
var nav = document.getElementsByClassName("navbar-area");

// Get the button that opens the modal
var btn = document.getElementById("click");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  btn.style.display = "none";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  btn.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == nav) {
    nav.style.display = "none !important";
  }
}

// When the user press ESCAPE, close it
$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    modal.style.display = "none";
  }
  if (e.keyCode == 27) {
    btn.style.display = "block";
  }
});




//slides CUBE

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  console.log("slideIndex: " + slideIndex);
   showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



//slides SIMPLE

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  console.log("slideIndex2: " + slideIndex2);
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides--2");
  console.log("x.leng: " + x.length + ", n: " + n);
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length};
  console.log("n: " + n);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2 - 1].style.display = "block";
}

//slides GLAZED

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  console.log("slideIndex3: " + slideIndex3);
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides--3");
  console.log("x.leng: " + x.length + ", n: " + n);
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length};
  console.log("n: " + n);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3 - 1].style.display = "block";
}



/////////////////////// MODAL 2 POP UP - SIMPLE
// Get the modal
var modal2 = document.getElementById("myModal2");
var nav2 = document.getElementsByClassName("navbar-area");

// Get the button that opens the modal
var btn2 = document.getElementById("click2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
  btn2.style.display = "none";
}


// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
  btn2.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == nav2) {
    nav2.style.display = "none !important";
  }
}

// When the user press ESCAPE, close it
$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    modal2.style.display = "none";
  }
  if (e.keyCode == 27) {
    btn2.style.display = "block";
  }
});



/////////////////////// MODAL 3 POP UP - GLAZED
// Get the modal
var modal3 = document.getElementById("myModal3");
var nav3 = document.getElementsByClassName("navbar-area");

// Get the button that opens the modal
var btn3 = document.getElementById("click3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
  btn3.style.display = "none";
}


// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
  btn3.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == nav) {
    nav3.style.display = "none !important";
  }
}

// When the user press ESCAPE, close it
$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    modal3.style.display = "none";
  }
  if (e.keyCode == 27) {
    btn3.style.display = "block";
  }
});



// // REALISATION POP UP

// Get the modal
var modal4 = document.getElementById("myModal--4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn--4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

// span4.onclick = function() {
//   modal4.style.height = "none !important";
//   btn4.style.display = "block";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

// When the user press ESCAPE, close it
$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    modal4.style.display = "none";
  }
});





// realisations slides

var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  console.log("slideIndex2: " + slideIndex4);
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides--4");
  console.log("x.leng: " + x.length + ", n: " + n);
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length};
  console.log("n: " + n);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4 - 1].style.display = "block";
}

