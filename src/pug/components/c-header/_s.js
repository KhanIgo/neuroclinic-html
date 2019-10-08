jQuery( $=>{
    $('body').on('click', '.js-toggle-searchbar', function(e){
        $('.b-header-search').toggleClass('b-header-search_visible');
    });
});