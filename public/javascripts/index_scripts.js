
$(function() {
  $('header a').attr('href', '/admin');
  $('#job').val(0);
  $('#state').val(0);
  $('#state1').val(0);
  $('#state2').val(0);
  $('#state3').val(0);

  $('#form').on('submit', function(formData) {
    var data = $(this).serializeArray();
    formData.preventDefault();
    $(this)[0].reset();

    $.ajax({
      url: '/applicant',
      method: 'POST',
      data: data
    }) .done(function(data) {
      $('content').html('Thank you for submitting an application.');
    });
  });
});
