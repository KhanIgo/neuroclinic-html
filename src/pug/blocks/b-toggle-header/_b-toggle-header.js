jQuery($=>{
    var $body = $('body');
    $('.js-hamburger').click(function (e) {
        e.preventDefault();
        if(winW>900){
            $('.b-nav-list__item_hide').find('.b-nav-list__submenu-wrpr').toggleClass('is-active');
        }
        $(this).toggleClass('is-active');
        $('.header__cnt').toggleClass('is-active');
        $body.toggleClass('g-ovh');
    });
    
});