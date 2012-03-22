!(function (exports) {

  var button_white = $('#button-white');
  var button_gray = $('#button-gray');
  var containers = $('.container');

  button_white.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  button_gray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

}(this));