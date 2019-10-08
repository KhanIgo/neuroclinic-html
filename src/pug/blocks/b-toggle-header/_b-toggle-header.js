jQuery($=>{
    $('.js-hamburger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.b-header-md-search-social').toggleClass('is-active');
        $('.header__cnt').toggleClass('is-active');
    });
    
});