;$(document).ready(function() {
    //загрузка файла
    $('input[type="file"]').imageuploadify();

    //история заявок
    $('.application-item_header').on('click', function(){
        //remove siblings
        $(this).parents('.application-item ').siblings().removeClass('application-item--active');
        $(this).parents('.application-item').toggleClass('application-item--active');
    });

    //валидация при отправке в форме apply
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

    //валидация при отправке в форме guest
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


      //изменения инпута телефон формы guest
      var $guestBookPhone = $('#guest-book_phone');
      $guestBookPhone.on('change', function(){
          $('#guest-book_email').css("border-color", "#b2b2b2");
      });

      if($guestBookPhone.val() <= 0) {
        checkBorder($('#guest-book_email'));
      }
    }

    // mask
    $('#apply-phone-number').mask('+7(000)000-00-00');
    $('#guest-book_phone').mask('+7(000)000-00-00');
    $('#pharmacies-number').mask('0000');
});
