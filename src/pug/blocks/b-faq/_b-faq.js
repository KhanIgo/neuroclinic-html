jQuery($=>{
    $('body').on('click', '.js-open-accordeon', function (e) {
        e.preventDefault();
        let $this = $(this);
        let $item = $this.closest('.ui-accordeon');
        let $icon = $item.find('.ui-accordeon__toggle-icon');
        let $cnt = $item.find('.ui-accordeon__content');
        let $cntInner = $item.find('.ui-accordeon__content-inner');
        let $head = $item.find('.ui-accordeon__head');
        let height;
        if( $item.is('.is-active') ){
            height = 0;
        }
        else{
             height = $cntInner.height();
        }
        
        $cnt.animate({ 'height': height }, 350, 'linear');
        $item.toggleClass('is-active');
        $icon.toggleClass('ui-accordeon__toggle-icon_is-active');
        
//        let $siblings = $item.siblings('.ui-accordeon');
    })
});