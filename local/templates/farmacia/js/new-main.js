;$(document).ready(function() {
    $('input[type="file"]').imageuploadify();

    $('.application-item_header').on('click', function(){
        //remove siblings
        $(this).parents('.application-item ').siblings().removeClass('application-item--active');
        $(this).parents('.application-item').toggleClass('application-item--active');
    });


    $('.js-apply_button--apply').click(function (e) {
        e.preventDefault();
        sendFullFormApply();
    });

    function sendFullFormApply() {
      function checkLabel (input){
        var val = input.val();
        if (val.length <= 0 || val.length >= 50) {
            $(input).siblings('label').css("color", "#CB3631");
            resultat = false;
        } else {
          $(input).siblings('label').css("color", "inherit");
        }
      } // checkNames
      checkLabel($('#pharmacies-number'));
      checkLabel($('#apply-user'));
      checkLabel($('#apply-phone-number'));
    };// sendFullForm


    $('.js-apply_button--guest').click(function (e) {
        e.preventDefault();
        sendFullFormGuest();
    });

    function sendFullFormGuest() {
      function checkBorder (input){
        var val = input.val();
        if (val.length <= 0 || val.length >= 50) {
            $(input).css("border-color", "#CB3631");
            // resultat = false;
        } else {
          $(input).css("border-color", "#b2b2b2");
        }
      } // checkBorder

      var $guestBookPhone = $('#guest-book_phone');


      //изменения инпутов телефон и email
      $guestBookPhone.on('change', function(){
        var val = $(this).val();
        if (val.length <= 0 || val.length >= 50) {
            $(this).css("border-color", "#CB3631");
        } else {
          $(this).css("border-color", "#b2b2b2");
          $('#guest-book_email').css("border-color", "#b2b2b2");
        }
      });

      if($guestBookPhone.val() <= 0) {
        checkBorder($('#guest-book_email'));
      }

      // $('#guest-book_email').on('change', function(){
      //   checkBorder($('#guest-book_email'));
      //   $('#guest-book_phone').css("border-color", "inherit !important");
      // });


      // checkBorder($('#guest-book_phone'));
    }




    // function addDisabled (inputChange, inputDisabled){
    //   inputChange.on('change', function(){
    //     var val = $(this).val();
    //     if(val.length > 0){
    //       inputDisabled.attr('disabled','disabled');
    //     }else if(val.length == 0){
    //       inputDisabled.removeAttr('disabled');
    //     }
    //   })
    // }



    // addDisabled(  $('#guest-book_phone'), $("#guest-book_email"));
    // addDisabled(  $("#guest-book_email"), $('#guest-book_phone'));



    // mask
    $('#apply-phone-number').mask('+7(000)000-00-00');
    $('#guest-book_phone').mask('+7(000)000-00-00');
    $('#pharmacies-number').mask('0000');

});
