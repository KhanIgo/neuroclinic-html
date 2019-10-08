jQuery($=>{
    var owlConfig, 
        jqCarousel,
        carousel,
        slide_delay = 1,
        t1_time = 0.7,
        t1_delay = 0.5,
        t2_time = 0.7,
        t2_delay = t1_delay + 0.5,
        img_time = 0.4,
        img_delay = t2_delay + 0.3,
        bg_time = 0.6,
        bg_delay = img_delay + 0.6,
        reset_timeout = 2000;
    
    owlConfig = {
        items: 1,
        margin: 0,
        loop: true,
        autoHeight: true,
        URLhashListener: false,
        autoplay: false,
        autoplayTimeout:4000,
        autoplaySpeed: 2500,
        autoplayHoverPause: true,
        navigation: true
    };
    jqCarousel = $('.js-big-slider');    
    jqCarousel.on('initialized.owl.carousel', function(event){
        let item = $(this).find('.owl-stage')
        .children()
        .eq(event.relatedTarget.normalize( event.relatedTarget.current() ));
        slide_elements_in( $(item) );
    });
    
    carousel = jqCarousel.owlCarousel(owlConfig);
    jqCarousel.on('changed.owl.carousel', function(event){
        setTimeout(function () {
            var $slide = jqCarousel.find('.owl-item.active');
            slide_elements_in($slide);
        }, 5);
    });
    
    function slide_elements_in(target){
        console.log(target);
        let 
            $slide = target,
            $t1 = $slide.find('.b-big-slider-item__title'), 
            $t2 = $slide.find('.b-big-slider-item__desc');
        
        TweenMax.from($t1, t1_time, {opacity:0, x: 300, delay: t1_delay});
        TweenMax.from($t2, t2_time, {opacity:0, x: 300, delay: t2_delay});
        
        setTimeout(function(){
            slide_reset([$t1, $t2]);
        }, reset_timeout);
        function slide_reset($objects_arr){
            TweenMax.set($objects_arr, {clearProps:"all"});
        }
    }
});
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
jQuery($=>{
    $('.b-courses-header__filter-link-main').click(function (e) {
        e.preventDefault();
    });
    
//    var form = $('#js-course-search-form');
//
//    let dp = $('#js-course-datepicker').datepicker({
//        inline: false,
//        maxDate: new Date(),
//        onSelect: function(formattedDate, date, dp){
//            $('#js-date-input').val(date);
//            form.submit();
//        }
//    });
});
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
jQuery($=>{
    $('body').on('click', '.js-open-accordeon', function (e) {
        e.preventDefault();
        let $this = $(this);
        let $item = $this.closest('.ui-accordeon');
        let $icon = $item.find('.ui-accordeon__toggle-icon');
        let $cnt = $item.find('.ui-accordeon__content');
        let $cntInner = $item.find('.ui-accordeon__content-inner');
        let $head = $item.find('.ui-accordeon__head');
        let height;
        if( $item.is('.is-active') ){
            height = 0;
        }
        else{
             height = $cntInner.height();
        }
        
        $cnt.animate({ 'height': height }, 350, 'linear');
        $item.toggleClass('is-active');
        $icon.toggleClass('ui-accordeon__toggle-icon_is-active');
        
//        let $siblings = $item.siblings('.ui-accordeon');
    })
});
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

jQuery($=>{
    $('.js-hamburger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.b-header-md-search-social').toggleClass('is-active');
        $('.header__cnt').toggleClass('is-active');
    });
    
});

jQuery(function($){
    var form = $('.js-date-filter-form');

    let dp = $('#js-news-datepicker').datepicker({
        maxDate: new Date(),
        onSelect: function(formattedDate, date, dp){
            form.submit();
        }
    });
    



});
jQuery( $=>{
    $('body').on('click', '.js-toggle-searchbar', function(e){
        $('.b-header-search').toggleClass('b-header-search_visible');
    });
});