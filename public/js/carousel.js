jQuery(document).ready(function($) {
  "use strict";
  // TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      576: {
        items: 2,
        margin: 20
      },
      768: {
        items: 3,
        margin: 30
      },
      992: {
        items: 4,
        margin: 40
      },
      1200: {
        items: 5,
        margin: 50
      }
    }
  });
});
