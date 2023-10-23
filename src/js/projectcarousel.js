$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoPlay:true,
    margin: 2,
    center: true,
    lazyLoad:true,
    animateOut: true,
    animateIn: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})