!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");

  var buttonWhite = $('#button-white');
  var buttonGray = $('#button-gray');
  var containers = $('.container');

  var drawCircle = function (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    ctx.stroke();
  };

  buttonWhite.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  buttonGray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

  canvas.on('mousedown', function (e) {
    drawCircle(e.offsetX, e.offsetY, 16);
  });

}(this));