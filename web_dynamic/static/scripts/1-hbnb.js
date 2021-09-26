$(document).ready(function () {
  const Id = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      Id[$(this).data('id')] = $(this).data('name');
    } else if ($(this).prop('checked') === false) {
      delete Id[$(this).attr('data-id')];
    }
    $('div.amenities H4').text(Object.values(Id).join(', '));
  });
});
