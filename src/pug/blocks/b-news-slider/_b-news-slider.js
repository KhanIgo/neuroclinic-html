jQuery(($) => {
    let owlConfig,
        $jqCarousel,
        carousel,
        items = 3,
        margin = 20,
        slide_delay = 1,
        reset_timeout = 1300;
    
    if(winW<960) items = 2;
    if(winW<620){
        items = 1;
        margin = 10;
    } 

    owlConfig = {
        items: items,
        margin: margin,
        loop: true,
        URLhashListener: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true
//        navigation: true
    };
    $jqCarousel = $('.js-news-slider');

    carousel = $jqCarousel.owlCarousel(owlConfig);

});