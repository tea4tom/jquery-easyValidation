/* easyValidation v1.0.0

*/


// Folder browser class
if(jQuery) (function($) {

	$.fn.easyValidation = function(options) {

		// Declare a class instance
		var instance = $(this);
		instance.eleDOM = $(this)[0];

		instance.options = $.extend({
      // Default class values
    }, options );

    // Instance runtime properties
    function validateTelephoneNumber(val) {
      var exp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
      return exp.test(val);
    }

    function validateEmailAddress(val) {
      var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return exp.test(val);
    }
		function initialiseValidation(form) {

      // Add glowingborder class to all text type fields
      $(form).find(':input').each(function() {
        $(this).addClass('ev-glowingborder');

        if($(this).data('validate')=='email') {
          // onkeyup
          $(this).keyup(function() {
            if($(this).val() != '') {
              if(validateEmailAddress($(this).val())) {
                $(this).removeClass('ev-haserror');
                $(this).addClass('ev-validated');
              } else {
                $(this).removeClass('ev-validated');
                $(this).addClass('ev-haserror');
              }
            }
          });
					// && focusout
					$(this).focusout(function() {
            if($(this).val() != '') {
              if(validateEmailAddress($(this).val())) {
                $(this).removeClass('ev-haserror');
                $(this).addClass('ev-validated');
              } else {
                $(this).removeClass('ev-validated');
                $(this).addClass('ev-haserror');
              }
            }
          });
        }

        if($(this).data('validate')=='telephone') {
          // onkeyup
          $(this).keyup(function() {
            if($(this).val() != '') {
              if(validateTelephoneNumber($(this).val())) {
                $(this).removeClass('ev-haserror');
                $(this).addClass('ev-validated');
              } else {
                $(this).removeClass('ev-validated');
                $(this).addClass('ev-haserror');
              }
            }
          });
					// && focusout
					$(this).focusout(function() {
            if($(this).val() != '') {
              if(validateTelephoneNumber($(this).val())) {
                $(this).removeClass('ev-haserror');
                $(this).addClass('ev-validated');
              } else {
                $(this).removeClass('ev-validated');
                $(this).addClass('ev-haserror');
              }
            }
          });
        }

        if($(this).data('validate')=='notnull') {
          $(this).focusout(function() {
            if($(this).val()=='') {
              $(this).removeClass('ev-validated');
              $(this).addClass('ev-haserror');
            } else {
              $(this).removeClass('ev-haserror');
              $(this).addClass('ev-validated');
            }
          });
        }

      });

      // add onchange event to telephone/email inputs

      // add on exit events to all not-null required fields

			return form;

		}

		/* Class initialisation code
		   *********************************************************************
		*/
		return initialiseValidation(instance);

	}



})(jQuery);

$( document ).ready(function() {
  var nfrms = 0;

    $('form.easyValidate').each(function() {
      $(this).easyValidation();
    });

    console.log( "ready!" );
});
