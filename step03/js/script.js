!(function (exports) {

  var myButton = $('#myButton');

  var greets = function (e) {
    alert('Hello Web :)');
  }

  myButton.on('click', greets);

}(this));