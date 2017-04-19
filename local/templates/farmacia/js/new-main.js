;$(document).ready(function() {
    $('input[type="file"]').imageuploadify();

    $('.application-item_header').on('click', function(){
        //remove siblings
        $(this).parents('.application-item ').siblings().removeClass('application-item--active');
        $(this).parents('.application-item').toggleClass('application-item--active');
    });


    $('.js-apply_button').click(function (e) {
        e.preventDefault();
        sendFullForm();
    });

    function sendFullForm() {

      function checkNames (input){
        var val = input.val();
        if (val.length <= 0 || val.length >= 50) {
            $(input).siblings('label').css("color", "#CB3631");
            resultat = false;
        } else {
          $(input).siblings('label').css("color", "inherit");
        }
      } // checkNames

      checkNames($('#pharmacies-number'));
      checkNames($('#apply-user'));
      checkNames($('#apply-phone-number'));

    };// sendFullForm

    // mask
    $('#apply-phone-number').mask('+7(000)000-00-00');
    $('#pharmacies-number').mask('0000');

});
