!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");
  var width = canvas.width();
  var height = canvas.height();
  var radius;

  var button_white = $('#button-white');
  var button_gray = $('#button-gray');
  var containers = $('.container');

  var button_clear = $('#button-clear');

  var slider_radius = $('#slider-radius');
  var monitor_radius = $('#monitor-radius');

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

  button_white.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  button_gray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

  canvas.on('mousedown', function (e) {
    drawCircle(e.offsetX, e.offsetY, radius);
  });

  button_clear.on('click', function (e) {
    initCanvas();
  });

  slider_radius.on('change', function (e) {
    var value = slider_radius.attr('value');

    radius = value;
    monitor_radius.text(value);
  });

  initCanvas();

}(this));