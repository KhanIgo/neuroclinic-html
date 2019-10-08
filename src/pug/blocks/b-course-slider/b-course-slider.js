jQuery(($) => {
    let owlConfig,
        $jqCarousel,
        carousel,
        items,
        slide_delay = 1,
        reset_timeout = 1300;
    
    if(winW < 960) items = 2;
    if(winW < 620) items = 1;

    owlConfig = {
        items: items,
        margin: 20,
        loop: true,
        URLhashListener: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true
//        navigation: true
    };
    $jqCarousel = $('.js-course-slider');

    carousel = $jqCarousel.owlCarousel(owlConfig);

});