!(function (exports) {

  var mybutton = $('#mybutton');

  var greets = function (e) {
    alert('Hello Web :)');
  }

  mybutton.on('click', greets);

}(this));