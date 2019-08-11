jQuery(($) => {
    let owlConfig,
        $jqCarousel,
        carousel,
        slide_delay = 1,
        reset_timeout = 1300;

    owlConfig = {
        items: 3,
        margin: 20,
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