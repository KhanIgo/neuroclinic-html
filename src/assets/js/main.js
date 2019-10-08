var md = new MobileDetect(window.navigator.userAgent);
var isDesktop, isTablet, isPhone, device;
if(md.phone()){
    isPhone = true;
    device = 'phone';
} 
else isPhone = false;
if(md.tablet()){
    device = 'tablet';
    isTablet = true;
} 
else isTablet = false;
if(!md.mobile()){
    device = 'desktop';
    isDesktop = true;
}
else isDesktop = false;

var winW = window.innerWidth;
var winH = window.innerHeight;

jQuery($ => {
    if( $('body').is('.home') ){
        $('.b-nav-list a, .b-icon-links a').click(function(){
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

