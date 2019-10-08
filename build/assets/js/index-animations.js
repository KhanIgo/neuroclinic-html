jQuery($ => {
    var $body = $('body')
    if( !$body.is('.home') ) return;
    $win = $(window);
    $win.scrollTop($(window).scrollTop()+1);

    
    var 
        bodyPT = 0,
        $header = $('.header'),
        $indexBigSlider = $('.b-big-slider-row');
    
    $header.addClass('is-fixed');
    bodyPT += $header.height();
    $indexBigSlider.addClass('is-fixed').css('top', bodyPT);
    bodyPT += $indexBigSlider.height();
    $body.css('padding-top', bodyPT);
    
 
    var ctrl = new ScrollMagic.Controller();
    
//    big-slider animation begin  
    {
        var $bs = $('.js-big-slider');
        var abs = TweenMax.from($bs, 1, {xPercent:75, opacity:0, delay:0.5});
        var sabs = new ScrollMagic.Scene({offset: 0}).setTween(abs).addTo(ctrl);
    }
//    big-slider animation end    
//    
    
//    medprogs animation begin
    {
        var $b1 = $('.b-med-prog__title'),
            $b2 = $('.b-med-prog__text'),
            $b3 = $('.b-med-prog .b-cnt-title-and-btn-cnt'),
            $b4 = $('.b-med-prog .c-edu-programs__slider');
    
        var ab1 = TweenMax.from($b1, 1, {x:400, opacity:0}),
            ab2 = TweenMax.from($b2, 1, {x:400, opacity:0, delay:0.2}),
            ab3_4 = TweenMax.from([$b3, $b4], 1, {xPercent:50, opacity:0, delay:0.4});

        var sab1 = new ScrollMagic.Scene({triggerElement: '.b-med-prog .sm-trigger_1', triggerHook: 0.9}).setTween(ab1).addTo(ctrl),
            sab2 = new ScrollMagic.Scene({triggerElement: '.b-med-prog .sm-trigger_1', triggerHook: 0.9}).setTween(ab2).addTo(ctrl),
            sab3_4 = new ScrollMagic.Scene({triggerElement: '.b-med-prog .sm-trigger_2', triggerHook: 0.9}).setTween(ab3_4).addTo(ctrl);
    }
//    medprogs animation end
    
//    b-index-appointment animation begin
    {
        var $b5 = $('.b-index-appointment__title'),
            $b6 = $('.b-index-appointment__desc'),
            $b7 = $('.b-index-appointment__book');

        var ab5 = TweenMax.from($b5, 1, {x:400, opacity:0}),
            ab6 = TweenMax.from($b6, 1, {x:400, opacity:0, delay:0.2}),
            ab7 = TweenMax.from($b7, 1, {xPercent:50, opacity:0, delay:0.4});

        var sab5 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_3', triggerHook: 0.8}).setTween(ab5).addTo(ctrl),
            sab6 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_3', triggerHook: 0.8}).setTween(ab6).addTo(ctrl),
            sab7 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_4', triggerHook: 0.8}).setTween(ab7).addTo(ctrl);
    }
//    b-index-appointment animation end
    
//    b-partners animation begin
    {
        var $b8 = $('.b-partners__title'),
            $b9 = $('.b-partners__desc'),
            $b10 = $('.b-clinic-logo-row'),
            $b11 = $('.b-partners__btn-wrpr');
    
        var ab8 = TweenMax.from($b8, 1, {x:400, opacity:0}),
            ab9 = TweenMax.from($b9, 1, {x:400, opacity:0, delay:0.2}),
            ab10_11 = TweenMax.from([$b10, $b11], 1, {xPercent:50, opacity:0, delay:0.4});

        var sab8 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_5', triggerHook: 0.8}).setTween(ab8).addTo(ctrl),
            sab9 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_6', triggerHook: 0.8}).setTween(ab9).addTo(ctrl),
            sab10_11 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_7', triggerHook: 0.8}).setTween(ab10_11).addTo(ctrl);     
    }
//    b-partners animation end
    
//    c-edu-programs animation begin
    {
        var $b12 = $('.c-edu-programs__title'),
            $b13 = $('.c-edu-programs__desc'),
            $b14 = $('.c-edu-programs__big'),
            $b15 = $('.c-edu-programs__slider');
    
        var ab12 = TweenMax.from($b12, 1, {x:400, opacity:0}),
            ab13 = TweenMax.from($b13, 1, {x:400, opacity:0, delay:0.2}),
            ab14 = TweenMax.from($b14, 1, {xPercent:50, opacity:0, delay:0.4}),
            ab15 = TweenMax.from($b15, 1, {xPercent:50, opacity:0, delay:0.6});

        var sab12 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_8', triggerHook: 0.8}).setTween(ab12).addTo(ctrl),
            sab13 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_9', triggerHook: 0.8}).setTween(ab13).addTo(ctrl),
            sab14 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_10', triggerHook: 0.8}).setTween(ab14).addTo(ctrl),
            sab15 = new ScrollMagic.Scene({triggerElement: '.sm-trigger_11', triggerHook: 0.8}).setTween(ab15).addTo(ctrl);  
    }
//    c-edu-programs animation end
    
//    b-index-faq animation begin
    {
        var $b16 = $('.b-index-faq__title'),
            $b17 = $('.b-faq-list-post-content'),
            $b18 = $('.b-faq-list');
    
        var ab16 = TweenMax.from($b16, 1, {x:400, opacity:0}),
            ab17 = TweenMax.from($b17, 1, {x:400, opacity:0, delay:0.2}),
            ab18 = TweenMax.from($b18, 1, {xPercent:50, opacity:0, delay:0.4});

        var sab16 = new ScrollMagic.Scene({triggerElement: '.b-index-faq .sm-trigger_1', triggerHook: 0.8}).setTween(ab16).addTo(ctrl),
            sab17 = new ScrollMagic.Scene({triggerElement: '.b-index-faq .sm-trigger_1', triggerHook: 0.8}).setTween(ab17).addTo(ctrl),
            sab18 = new ScrollMagic.Scene({triggerElement: '.b-index-faq .sm-trigger_2', triggerHook: 0.8}).setTween(ab18).addTo(ctrl);     
    }
//    b-index-faq animation end
    
//    b-calendar animation begin
    {
        var $b19 = $('.b-calendar__title'),
            $b20 = $('.b-calendar__desc'),
            $b21 = $('.b-calendar__cal');
    
        var ab19 = TweenMax.from($b19, 1, {x:400, opacity:0}),
            ab20 = TweenMax.from($b20, 1, {x:400, opacity:0, delay:0.2}),
            ab21 = TweenMax.from($b21, 1, {xPercent:50, opacity:0, delay:0.4});

        var sab19 = new ScrollMagic.Scene({triggerElement: '.b-calendar .sm-trigger_1', triggerHook: 0.8}).setTween(ab19).addTo(ctrl),
            sab20 = new ScrollMagic.Scene({triggerElement: '.b-calendar .sm-trigger_2', triggerHook: 0.8}).setTween(ab20).addTo(ctrl),
            sab21 = new ScrollMagic.Scene({triggerElement: '.b-calendar .sm-trigger_2', triggerHook: 0.8}).setTween(ab21).addTo(ctrl);     
    }
//    b-calendar animation end
    

//    b-news-slider animation begin
    {
        var $b22 = $('.b-news-slider-row .t-section-title'),
            $b23 = $('.b-news-slider-row .b-news-slider'),
            $b24 = $('.b-news-slider-row .b-news-slider-btn-wrpr');
    
        var ab22 = TweenMax.from($b22, 1, {x:400, opacity:0}),
            ab23 = TweenMax.from($b23, 1, {xPercent:50, opacity:0, delay:0.2}),
            ab24 = TweenMax.from($b24, 1, {x:400, opacity:0, delay:0.4});

        var sab22 = new ScrollMagic.Scene({triggerElement: '.b-news-slider-row .sm-trigger_1', triggerHook: 0.8}).setTween(ab22).addTo(ctrl),
            sab23 = new ScrollMagic.Scene({triggerElement: '.b-news-slider-row .sm-trigger_2', triggerHook: 0.8}).setTween(ab23).addTo(ctrl),
            sab24 = new ScrollMagic.Scene({triggerElement: '.b-news-slider-row .sm-trigger_3', triggerHook: 0.8}).setTween(ab24).addTo(ctrl);     
    }
//    b-news-slider animation end
    
    
    // index-clinics animations begin
    {
        var $b25 = $('#index-clinics .b-cnt-title-and-btn-cnt'),
            $b26 = $('#index-clinics .b-index-author-list');
        var ab25 = TweenMax.from($b25, 1, {x:400, opacity:0}),
            ab26 = TweenMax.from($b26, 1, {xPercent:50, opacity:0, delay:0.2});
        
        var sab25 = new ScrollMagic.Scene({triggerElement: '#index-clinics .sm-trigger_1', triggerHook: 0.8}).setTween(ab25).addTo(ctrl),
            sab26 = new ScrollMagic.Scene({triggerElement: '#index-clinics .sm-trigger_2', triggerHook: 0.8}).setTween(ab26).addTo(ctrl);     
    }
    // index-clinics animations end
    
    // index-doctors animations begin
    {
        var $b27 = $('#index-doctors .b-cnt-title-and-btn-cnt'),
            $b28 = $('#index-doctors .b-index-author-list');
        var ab27 = TweenMax.from($b27, 1, {x:400, opacity:0}),
            ab28 = TweenMax.from($b28, 1, {xPercent:50, opacity:0, delay:0.2});
        
        var sab27 = new ScrollMagic.Scene({triggerElement: '#index-doctors .sm-trigger_1', triggerHook: 0.8}).setTween(ab27).addTo(ctrl),
            sab28 = new ScrollMagic.Scene({triggerElement: '#index-doctors .sm-trigger_2', triggerHook: 0.8}).setTween(ab28).addTo(ctrl);     
    }
    // index-doctors animations end
    
    
    // b-course-slider #course-1 animations begin
    {
        var $b29 = $('#course-1 .b-cnt-title-and-btn-cnt'),
            $b30 = $('#course-1 .b-course-slider');
        var ab29 = TweenMax.from($b29, 1, {x:400, opacity:0}),
            ab30 = TweenMax.from($b30, 1, {xPercent:50, opacity:0, delay:0.2});
        var sab29 = new ScrollMagic.Scene({triggerElement: '#course-1 .sm-trigger_1', triggerHook: 0.8}).setTween(ab29).addTo(ctrl),
            sab30 = new ScrollMagic.Scene({triggerElement: '#course-1 .sm-trigger_2', triggerHook: 0.8}).setTween(ab30).addTo(ctrl);
    }
    // b-course-slider #course-1 animations end
    
    // b-course-slider #course-2 animations begin
    {
        var $b31 = $('#course-2 .b-cnt-title-and-btn-cnt'),
            $b32 = $('#course-2 .b-course-slider');
        var ab31 = TweenMax.from($b31, 1, {x:400, opacity:0}),
            ab32 = TweenMax.from($b32, 1, {xPercent:50, opacity:0, delay:0.2});
        var sab31 = new ScrollMagic.Scene({triggerElement: '#course-2 .sm-trigger_1', triggerHook: 0.8}).setTween(ab31).addTo(ctrl),
            sab32 = new ScrollMagic.Scene({triggerElement: '#course-2 .sm-trigger_2', triggerHook: 0.8}).setTween(ab32).addTo(ctrl);
    }
    // b-course-slider #course-2 animations end
    
    // b-course-slider #course-3 animations begin
    {
        var $b33 = $('#course-3 .b-cnt-title-and-btn-cnt'),
            $b34 = $('#course-3 .b-course-slider');
        var ab33 = TweenMax.from($b33, 1, {x:400, opacity:0}),
            ab34 = TweenMax.from($b34, 1, {xPercent:50, opacity:0, delay:0.2});
        var sab33 = new ScrollMagic.Scene({triggerElement: '#course-3 .sm-trigger_1', triggerHook: 0.8}).setTween(ab33).addTo(ctrl),
            sab34 = new ScrollMagic.Scene({triggerElement: '#course-3 .sm-trigger_2', triggerHook: 0.8}).setTween(ab34).addTo(ctrl);
    }
    // b-course-slider #course-3 animations end
    
    
    
});
function cloneObj(src) {
  return JSON.parse(JSON.stringify(src));
}
