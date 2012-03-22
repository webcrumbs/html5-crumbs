!(function (exports) {

  var buttonWhite = $('#button-white');
  var buttonGray = $('#button-gray');
  var containers = $('.container');

  buttonWhite.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  buttonGray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

}(this));