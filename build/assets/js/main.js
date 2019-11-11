jQuery($ => {
    if( $('body').is('.home') ){
        $('.b-nav-list a, .b-icon-links a, a.js-scroll-to').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 100
            }, 1000);
            return false;
        });
    }
    
    
    if(window.history.length>1){
        $('.js-go-back').removeClass('d-none');
    }
    $('.js-go-back').click(function (e) {
        window.history.go(-1);
    });
    
    
//    document.addEventListener( 'wpcf7submit', function( event ) {
//    //    alert( "Fire!" );
//        console.log(event);
//    }, false );
});



