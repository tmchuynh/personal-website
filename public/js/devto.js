// define variables
var x;
var $cards = $(".devcard");
var $style = $(".hover");
var w = $(window).width();
var h = $(window).height();

// add event listener for mousemove and touchmove
$cards.on("mousemove touchmove", function (e) {

  // normalize touch/mouse event position
  var pos = [e.offsetX, e.offsetY];
  e.preventDefault();

  // if the event type is touchmove, set position to touch coordinates
  if (e.type === "touchmove") {
    pos = [e.touches[0].clientX, e.touches[0].clientY];
  }

  // get the current card being hovered/touched
  var $card = $(this);

  // calculate mouse position
  var l = pos[0];
  var t = pos[1];
  var px = Math.abs(Math.floor(100 / w * l) - 100);
  var py = Math.abs(Math.floor(100 / h * t) - 100);
  var pa = (50 - px) + (50 - py);

  // calculate gradient and background positions
  var lp = (50 + (px - 50) / 1.5);
  var tp = (50 + (py - 50) / 1.5);
  var px_spark = (50 + (px - 50) / 7);
  var py_spark = (50 + (py - 50) / 7);
  var p_opc = 20 + (Math.abs(pa) * 1.5);
  var ty = ((tp - 50) / 2) * -1;
  var tx = ((lp - 50) / 1.5) * .5;

  // create style strings for the gradient, sparkles, and transform
  var grad_pos = `background-position: ${lp}% ${tp}%;`
  var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
  var opc = `opacity: ${p_opc / 100};`
  var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`

  // create CSS styles for the hover effect
  var style = `
    .card:hover:before { ${grad_pos} }  /* gradient */
    .card:hover:after { ${sprk_pos} ${opc} ${tf} }   /* sparkles */ 
  `

  // set the class and style for the current card
  $cards.removeClass("active");
  $card.removeClass("animated");
  $card.attr("style", tf);
  $style.html(style);

  // prevent touchmove from scrolling the page
  if (e.type === "touchmove") {
    return false;
  }

  // clear any existing timeouts
  clearTimeout(x);
})
  // add event listener for mouseout, touchend, and touchcancel
  .on("mouseout touchend touchcancel", function () {
    var $card = $(this);
    $style.html("");
    $card.removeAttr("style");

    // add the "animated" class to the current card after a timeout
    x = setTimeout(function () {
      $card.addClass("animated");
    }, 2500);
  });
