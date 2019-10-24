jQuery($ => {
    if( $('body').is('.home') ){
        $('.b-nav-list a, .b-icon-links a, a.js-scroll-to').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 100
            }, 1000);
            return false;
        });
    }
    
    
    
    
    
    
    
//    document.addEventListener( 'wpcf7submit', function( event ) {
//    //    alert( "Fire!" );
//        console.log(event);
//    }, false );
});

