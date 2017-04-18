;$(document).ready(function() {
    $('input[type="file"]').imageuploadify();

    $('.application-item_header').on('click', function(){
        //remove siblings
        $(this).parents('.application-item ').siblings().removeClass('application-item--active');

        $(this).parents('.application-item').toggleClass('application-item--active');
    });
});