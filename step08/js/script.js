!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");
  var width = canvas.width();
  var height = canvas.height();
  var radius = 15;
  var bgComponentsDefault = [232,232,232];

  var buttonWhite = $('#button-white');
  var buttonGray = $('#button-gray');
  var containers = $('.container');

  var buttonClear = $('#button-clear');

  var sliderRadius = $('#slider-radius');
  var monitorRadius = $('#monitor-radius');

  var sliderBgRed = $('#slider-bg-red');
  var sliderBgGreen = $('#slider-bg-green');
  var sliderBgBlue = $('#slider-bg-blue');

  var bgComponents = bgComponentsDefault;

  var circles = [];

  var Circle = function (x, y, raduis) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  Circle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
    ctx.stroke();
  };

  var initCanvas = function (bgColor) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 2;
  };

  var draw = function () {
    initCanvas('rgb(' + bgComponents.join() + ')');
    circles.forEach(function (circle) {
      circle.draw();
    });
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
    circles.push(new Circle(e.offsetX, e.offsetY, radius));
    draw();
  });

  buttonClear.on('click', function (e) {
    circles = [];
    initCanvas();
    draw();
  });

  sliderRadius.on('change', function (e) {
    var value = $(this).attr('value');

    radius = value;
    monitorRadius.text(value);
  });

  sliderBgRed.on('change', function (e) {
    bgComponents[0] = $(this).attr('value');
    draw();
  });

  sliderBgGreen.on('change', function (e) {
    bgComponents[1] = $(this).attr('value');
    draw();
  });

  sliderBgBlue.on('change', function (e) {
    bgComponents[2] = $(this).attr('value');
    draw();
  });

  initCanvas('rgb(' + bgComponents.join() + ')');

}(this));