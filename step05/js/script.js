!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");
  var width = canvas.width();
  var height = canvas.height();

  var button_red = $('#button-red');
  var button_green = $('#button-green');
  var button_blue = $('#button-blue');

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

  button_red.on('click', function (e) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillRect(0, 0, width, height);
  });

  button_green.on('click', function (e) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(0,255,0)';
    ctx.fillRect(0, 0, width, height);
  });

  button_blue.on('click', function (e) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fillRect(0, 0, width, height);
  });

}(this));