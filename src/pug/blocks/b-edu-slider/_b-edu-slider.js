jQuery(($) => {
    let owlConfig,
        $jqCarousel,
        carousel,
        items = 1,
        margin = 10,
        slide_delay = 1,
        reset_timeout = 1300;
    
    if(winW > 950){
        items = 2;
        margin = 20;
    }

    owlConfig = {
        items: items,
        margin: margin,
        loop: true,
        URLhashListener: false,
        autoplay: false,
//        autoplayTimeout: 3000,
//        autoplaySpeed: 1000,
        autoplayHoverPause: true
//        navigation: true
    };
    
    $jqCarousel = $('.js-edu-slider');
    carousel = $jqCarousel.owlCarousel(owlConfig);
});