!(function (exports) {

  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");
  var width = canvas.width();
  var height = canvas.height();
  var radius = 15;
  var circleComponentsDefault = [0,0,0];
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

  var sliderCircleRed = $('#slider-circle-red');
  var sliderCircleGreen = $('#slider-circle-green');
  var sliderCircleBlue = $('#slider-circle-blue');

  var circleComponents = circleComponentsDefault;

  var circles = [];

  var colorMonitor = $('#color-monitor');

  var Circle = function (x, y, raduis, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  Circle.prototype.draw = function() {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
    ctx.stroke();
  };

  var stringifyRGB = function (components) {
    return 'rgb(' + components.join() + ')';
  };

  var initCanvas = function (bgColor) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = 2;
  };

  var draw = function () {
    initCanvas(stringifyRGB(bgComponents));
    circles.forEach(function (circle) {
      circle.draw();
    });
  };

  var updateColorMonitor = function () {
    colorMonitor.css({'background-color': stringifyRGB(circleComponents)});
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
    var color = stringifyRGB(circleComponents);
    circles.push(new Circle(e.offsetX, e.offsetY, radius, color));
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

  sliderCircleRed.on('change', function (e) {
    circleComponents[0] = $(this).attr('value');
    updateColorMonitor();
  });

  sliderCircleGreen.on('change', function (e) {
    circleComponents[1] = $(this).attr('value');
    updateColorMonitor();
  });

  sliderCircleBlue.on('change', function (e) {
    circleComponents[2] = $(this).attr('value');
    updateColorMonitor();
  });

  initCanvas(stringifyRGB(bgComponents));
  updateColorMonitor(stringifyRGB(circleComponents));

}(this));