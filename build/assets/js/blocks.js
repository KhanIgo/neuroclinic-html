jQuery($=>{
    let owlConfig, 
        jqCarousel,
        carousel,
        slide_delay = 1,
        t1_time = 0.4,
        t1_delay = slide_delay,
        t2_time = 0.4,
        t2_delay = t1_delay + 0.15,
        img_time = 0.4,
        img_delay = t2_delay + 0.3,
        bg_time = 0.6,
        bg_delay = img_delay + 0.6,
        reset_timeout = 1300;
    
    owlConfig = {
        items: 1,
        margin: 0,
        loop: true,
        URLhashListener: true,
        autoplay: false,
        autoplayTimeout:4000,
        autoplaySpeed: 2500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        navigation: true
    };
    jqCarousel = $('.js-big-slider');    
    jqCarousel.on('initialized.owl.carousel', function(event){
        let item = $(this).find('.owl-stage').children().eq(event.relatedTarget.normalize( event.relatedTarget.current() ));
        slide_elements_in($(item));
    });
    
    carousel = jqCarousel.owlCarousel(owlConfig);
//    carousel.on('change.owl.carousel', function(){ })
    carousel.on('changed.owl.carousel', function(event){
        slide_elements_in(event.currentTarget);
    });
    
    function slide_elements_in(target){
//        let 
//            $slide = $(target),
//            $t1 = $slide.find('.b-big-slider-item__title'), 
//            $t2 = $slide.find('.b-big-slider-item__desc');
//            $img = $slide.find('.b-index-slide__photo');
        
//        TweenMax.from($t1, t1_time, {opacity:0, top: -100, delay: t1_delay});
//        TweenMax.from($t2, t2_time, {opacity:0, bottom: -100, delay: t2_delay});
//        TweenMax.from($img, img_time, {opacity:0, right: -100, delay: img_delay});

//        TweenMax.from($slide, bg_time, {opacity:0, delay: bg_delay});  
//        setTimeout(function(){
//            slide_reset([$t1, $t2, $img, $slide]);
//        }, reset_timeout);
//        function slide_reset($objects_arr){
//            TweenMax.set($objects_arr, {clearProps:"all"});
//        }
    }
});
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
    $jqCarousel = $('.js-course-slider');

    carousel = $jqCarousel.owlCarousel(owlConfig);

});
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