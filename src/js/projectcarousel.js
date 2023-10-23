$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    margin: 2,
    fluidSpeed: 200,
    dots: true,
    center: true,
    lazyLoad:true,
    animateOut: true,
    animateIn: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})