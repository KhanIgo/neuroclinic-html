jQuery($ => {
    var $body = $('body')
    if ($body.is('.home')) {
        $win = $(window);
        $win.scrollTop($(window).scrollTop() + 1);

        var
            bodyPT = 0,
            $header = $('.header'),
            $indexBigSlider = $('.b-big-slider-row');

        $header.addClass('is-fixed');
        bodyPT += $header.height();
        $body.css('padding-top', bodyPT);
    }

    var bs = document.querySelectorAll('.b-intro');
    if (bs.length > 0) {
        bs.forEach(function (item, index) {
            TweenMax.to(item, 1, {
                opacity: 1,
                delay: 0.5
            });
        });
    }
});

function cloneObj(src) {
    return JSON.parse(JSON.stringify(src));
}