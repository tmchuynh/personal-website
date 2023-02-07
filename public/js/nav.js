var navbar = document.getElementsByClassName("navbar")[0];


// When the user scrolls down 20px from the top of the document, make the navbar fixed to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("navbar-fixed-top");
  } else {
    navbar.classList.remove("navbar-fixed-top");
  }
}
