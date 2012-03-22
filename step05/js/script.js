!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");

  var button_white = $('#button-white');
  var button_gray = $('#button-gray');
  var containers = $('.container');

  var drawCircle = function (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    ctx.stroke();
  };

  button_white.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  button_gray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

  canvas.on('mousedown', function (e) {
    drawCircle(e.offsetX, e.offsetY, 16);
  });

}(this));