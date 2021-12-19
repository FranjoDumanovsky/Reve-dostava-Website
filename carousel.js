$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true
        },
        600:{
            items:3,
            nav:false,
            dots:true
        },
        1100:{
            items:4,
            nav:true,
            loop:true
        }
    }
    })
