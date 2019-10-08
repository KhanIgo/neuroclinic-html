jQuery(function($){
    var form = $('.js-date-filter-form');

    let dp = $('#js-news-datepicker').datepicker({
        maxDate: new Date(),
        onSelect: function(formattedDate, date, dp){
            form.submit();
        }
    });
    



});