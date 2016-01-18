$(function() {
  $('header a').attr('href', '/');

  $.ajax({
    url: '/admin/search/default',
    method: 'GET',
  }) .done(function(data) {
    for (var i = 0; i < data.length; i++) {
      $tr = $('<tr>');
      $td = $('<td>');
      $tr.append($('<td>').html(data[i].fname));
      $tr.append($('<td>').html(data[i].lname));
      $tr.append($('<td>').html(data[i].location));
      $tr.append($('<td>').html(data[i].employer1));
      $tr.append($('<td>').html(data[i].reading));
      $tr.append($('<td>').html(data[i].writing));
      $tr.append($('<td>').html(data[i].rithmetic));
      $('#results').append($tr);
    }
  });

  $('#form').on('submit', function(formData) {
    console.log('Form is submitted');
    var data = $(this).serializeArray();
    formData.preventDefault();
    $(this)[0].reset();

    console.log(data);

    $.ajax({
      url: '/admin/search',
      method: 'GET',
      data: data
    }) .done(function(data) {
      for (var i = 0; i < data.length; i++) {
        $tr = $('<tr>');
        $td = $('<td>');
        $tr.append($('<td>').html(data[i].fname));
        $tr.append($('<td>').html(data[i].lname));
        $tr.append($('<td>').html(data[i].location));
        $tr.append($('<td>').html(data[i].employer1));
        $tr.append($('<td>').html(data[i].reading));
        $tr.append($('<td>').html(data[i].writing));
        $tr.append($('<td>').html(data[i].rithmetic));
        $('#results').append($tr);
      }
    });
  });
});
