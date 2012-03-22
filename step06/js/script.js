!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");
  var width = canvas.width();
  var height = canvas.height();

  var buttonWhite = $('#button-white');
  var buttonGray = $('#button-gray');
  var containers = $('.container');

  var buttonClear = $('#button-clear');

  var initCanvas = function () {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(232,232,232)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 2;
  };

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

  buttonClear.on('click', function (e) {
    initCanvas();
  });

  initCanvas();

}(this));