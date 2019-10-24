jQuery($ => {
    var $body = $('body')
    if( $body.is('.home') ){
        $win = $(window);
        $win.scrollTop($(window).scrollTop()+1);

        var 
            bodyPT = 0,
            $header = $('.header'),
            $indexBigSlider = $('.b-big-slider-row');

        $header.addClass('is-fixed');
        bodyPT += $header.height();
        // $indexBigSlider.addClass('is-fixed').css('top', bodyPT);
        // bodyPT += $indexBigSlider.height();
        $body.css('padding-top', bodyPT);
    }

    var ctrl = new ScrollMagic.Controller();

    // big-slider animation begin  
    {
//        var $bs = $('.b-big-slider-row');
        var $bs = $('.b-intro');
        var abs = TweenMax.to($bs, 1, { opacity:1, delay:0.5 });
        var sabs = new ScrollMagic.Scene({offset: 0, reverse: false}).setTween(abs).addTo(ctrl);
    }
    // big-slider animation end    

    
//    // medprogs animation begin
//    {   
//        var $b1 = $('.b-med-prog');
//        var ab1 = TweenMax.from($b1, 1, {opacity:0});
//        var sab1 = new ScrollMagic.Scene({triggerElement: '.b-med-prog .sm-trigger_1', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl);
//    }
//    // medprogs animation end
//    
//
//    // b-index-appointment animation begin
//    {
//        var $b2 = $('.b-index-appointment');
//        var ab2 = TweenMax.from($b2, 1, {opacity:0});
//        var sab2 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_3', triggerHook: 0.8, reverse: false }).setTween(ab2).addTo(ctrl);
//    }
//    // b-index-appointment animation end
//
//        
//    // b-partners animation begin
//    {
//        var $b3 = $('.b-partners__title');
//        var ab3 = TweenMax.from($b3, 1, {opacity:0});
//        var sab3 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_5', triggerHook: 0.8, reverse: false }).setTween(ab3).addTo(ctrl);     
//    }
//    // b-partners animation end
//    
//    
//    // c-edu-programs animation begin
//    {
//        var $b4 = $('.c-edu-programs');
//        var ab4 = TweenMax.from($b4, 1, {opacity:0});
//        var sab4 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_8', triggerHook: 0.8, reverse: false }).setTween(ab4).addTo(ctrl);  
//    }
//    // c-edu-programs animation end
//    
//    
//    // b-index-faq animation begin
//    {
//        var $b5 = $('.b-index-faq__title');
//        var ab5 = TweenMax.from($b5, 1, {opacity:0});
//        var sab5 = new ScrollMagic.Scene({triggerElement: '.b-index-faq .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab5).addTo(ctrl);
//    }
//    // b-index-faq animation end
//    
//    
//    // b-calendar animation begin
//    {
//        var $b6 = $('.b-calendar');
//        var ab6 = TweenMax.from($b6, 1, {opacity:0});
//        var sab6 = new ScrollMagic.Scene({triggerElement: '.b-calendar .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab6).addTo(ctrl);     
//    }
//    // b-calendar animation end 
//
//    // b-news-slider animation begin
//    {
//        var $b7 = $('.b-news-slider-row');
//        var ab7 = TweenMax.from($b7, 1, {opacity:0});
//        var sab7 = new ScrollMagic.Scene({triggerElement: '.b-news-slider-row .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab7).addTo(ctrl);
//    }
//    // b-news-slider animation end
//
//    // index-clinics animations begin
//    {
//        var $b8 = $('#index-clinics');
//        var ab8 = TweenMax.from($b8, 1, {opacity:0});
//        var sab8 = new ScrollMagic.Scene({triggerElement: '#index-clinics .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab8).addTo(ctrl);
//    }
//    // index-clinics animations end
//  
//    // index-doctors animations begin
//    {
//        var $b9 = $('#index-doctors');
//        var ab9 = TweenMax.from($b9, 1, {opacity:0});
//        var sab9 = new ScrollMagic.Scene({triggerElement: '#index-doctors .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab9).addTo(ctrl);
//    }
//    // index-doctors animations end
//
//    // b-course-slider #course-1 animations begin
//    {
//        var $b10 = $('#course-1');
//        var ab10 = TweenMax.from($b10, 1, {opacity:0});
//        var sab10 = new ScrollMagic.Scene({triggerElement: '#course-1 .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab10).addTo(ctrl);
//    }
//    // b-course-slider #course-1 animations end
//
//    // b-course-slider #course-2 animations begin
//    {
//        var $b11 = $('#course-2');
//        var ab11 = TweenMax.from($b11, 1, { opacity:0});
//        var sab11 = new ScrollMagic.Scene({triggerElement: '#course-2 .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab11).addTo(ctrl);
//    }
//    // b-course-slider #course-2 animations end
//
//        
//    // b-course-slider #course-3 animations begin
//    {
//        var $b12 = $('#course-3');
//        var ab12 = TweenMax.from($b12, 1, { opacity:0});
//        var sab12 = new ScrollMagic.Scene({triggerElement: '#course-3 .sm-trigger_1', triggerHook: 0.8, reverse: false }).setTween(ab12).addTo(ctrl);
//    }
//    // b-course-slider #course-3 animations end
   
});
function cloneObj(src) {
  return JSON.parse(JSON.stringify(src));
}
