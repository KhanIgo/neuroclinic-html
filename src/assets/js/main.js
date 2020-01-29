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
    
    
    
    let dpPec = $('.dp_pec_wrapper');
    let cPrefix = 'show-only';
    $('body').on('click', '.js-toggle-calendar-teaser', function(e) {
        e.preventDefault();
        let type = $(this).data('post-type');
        let dpPecCssClass = cPrefix+'_'+type;
        
        $(this).siblings('a').removeClass('is-active');
        $(this).addClass('is-active');
        
        dpPec.removeClass(cPrefix);
        dpPec.removeClass(cPrefix+'_course');
        dpPec.removeClass(cPrefix+'_booking');
        
        if(type != 'all'){
            dpPec.addClass(cPrefix);
            dpPec.addClass(dpPecCssClass);
        }
    });
});



function isExist(el){
    if( typeof(el)!='undefined' && el!=null ) return true;
    else return false;
}


//event-teaser-common
//event-teaser-booking
//event-teaser-course
//

