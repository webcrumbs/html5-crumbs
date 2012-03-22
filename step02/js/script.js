!(function (exports) {

  exports.selections = selections = {};

  console.log('Here are SELECTORS:');

  var selection01 = $('div');
  selections.selection01 = selection01;
  console.log('selection01:', selection01);

  var selection02 = $('#paper');
  selections.selection02 = selection02;
  console.log('selection02:', selection02);

  var selection03 = $('.container');
  selections.selection03 = selection03;
  console.log('selection03:', selection03);

}(this));