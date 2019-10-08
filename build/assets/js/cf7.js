jQuery($ => {
    $('body').on('wpcf7submit', function(e){
        let $form = $(e.target);
        let $loader = $form.find('.js-form-loader');
        var $completeMessage = $form.find('.js-on-complete');
        var $errorMessage = $form.find('.js-on-error');
        
        if( $loader.length > 0 ){
            $loader.removeClass('active');
        }
        
        if(e.detail.apiResponse.status == 'mail_sent'){
            var message = e.detail.apiResponse.message;
            var inputsData = e.detail.inputs;
            $completeMessage.find('span').text(message);
            showValidation($form, inputsData)
            
            if( $completeMessage.length > 0 ){
                $completeMessage.addClass('active');
                setTimeout(function(){
                    $completeMessage.removeClass('active');
                }, 3000);
            }
        }
        else{
            var inputsData = e.detail.inputs;
            showValidation($form, inputsData)
            
            var message = e.detail.apiResponse.message;
            $errorMessage.find('span').text(message);
            if( $errorMessage.length > 0 ){
                $errorMessage.addClass('active');
                setTimeout(function(){
                    $errorMessage.removeClass('active');
                }, 2500);
            }
        }
        
    });
    
    function showValidation($form, inputs){
        inputs.forEach(function(el){
                var inputName = el['name'];
                var inputVal = el['value'];
            var inputSelector = '[name='+ inputName +']';
                var $input = $form.find(inputSelector);
                if( $input.is('.wpcf7-validates-as-required') && inputVal==''){
                    $input.addClass('validation-failed');
                    $input.removeClass('validation-successed');
                }
                else{
                    $input.removeClass('validation-failed');
                    $input.addClass('validation-successed');
                }
            } );
    }
    
    initHiddenData();
    function initHiddenData(){
        if( typeof courseData === 'object' ){
            var $form = $('.b-course-purchase-form');
            var $inputName = $form.find('.js-course_name');
            var $inputLink = $form.find('.js-course_link');
            var $inputId = $form.find('.js-course_id');
            
            if($inputName.length){
                $inputName.val(courseData.name);
            }
            if($inputLink.length){
                $inputLink.val(courseData.link);
            }
            if($inputId.length){
                $inputId.val(courseData.id);
            }
            
        }
    }
    
    $('.wpcf7-form').on('submit', function(e){
        let $form = $(e.target);
        let $loader = $form.find('.js-form-loader');
        if( $loader.length > 0 ){
            $loader.addClass('active');
        }
    });
});

