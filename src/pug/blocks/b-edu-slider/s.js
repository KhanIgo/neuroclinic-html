jQuery(($) => {
    let owlConfig,
        $jqCarousel,
        carousel,
        slide_delay = 1,
        reset_timeout = 1300;

    owlConfig = {
        items: 2,
        margin: 20,
        loop: true,
        URLhashListener: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true
//        navigation: true
    };
    $jqCarousel = $('.js-edu-slider');

    carousel = $jqCarousel.owlCarousel(owlConfig);

});

//