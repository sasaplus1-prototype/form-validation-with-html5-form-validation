(function(){

  'use strict';

  $(function(){

    $('form').on('submit', function(event) {
      var results, result;
      
      results = $('input').map(function() {
        return this.validity.valid;
      }).get();

      result = ($.inArray(false, results) === -1);

      if (!result) {
        event.preventDefault();
      }
    });

    $('input').on('invalid', function(event) {
      event.preventDefault();

      $(this).closest('label').addClass('error-back');
    }).on('focus', function() {
      $(this).closest('label').removeClass('error-back');
    });

    $(document.body).on('change', 'input[name="switch"]', function() {
      var value = $(this).val();

      if (/^2$/.test(value)) {
        $('input[name="name"]').closest('div').removeClass('hidden');
        $('input[name="name"]').prop({
          disabled: false,
          required: true
        });
      } else {
        $('input[name="name"]').closest('div').addClass('hidden');
        $('input[name="name"]').prop({
          disabled: true,
          required: false
        });
      }
    });

  });

}());
