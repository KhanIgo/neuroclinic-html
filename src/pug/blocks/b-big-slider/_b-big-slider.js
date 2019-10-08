jQuery($=>{
    var sliderConfig, 
        $jqSlider,
        slider,
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
    
    $jqSlider = $('.js-big-slider');    
    slider = $jqSlider.bxSlider({
        mode: 'fade',
        pager: false,
        speed: 1000,
        onSlideBefore: function ($e, oi, ni) {
            $slide = $jqSlider.find('.b-big-slider-item').eq(ni);
            slide_elements_in($slide);    
        }
    });
    
    
    function slide_elements_in(target){
        let 
            $slide = target,
            $t1 = $slide.find('.b-big-slider-item__title'), 
            $t2 = $slide.find('.b-big-slider-item__desc');
        TweenMax.from($t1, t1_time, {opacity:0, x: 300, delay: t1_delay});
        TweenMax.from($t2, t2_time, {opacity:0, x: 300, delay: t2_delay});
        
        setTimeout(function(){
            TweenMax.set([$t1, $t2], {clearProps:"all"});
        }, reset_timeout);        
    }
});