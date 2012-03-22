!(function (exports) {

  var myButton = $('#mybutton');

  var greets = function (e) {
    alert('Hello Web :)');
  }

  myButton.on('click', greets);

}(this));