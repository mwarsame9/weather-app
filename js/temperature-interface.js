var Temp = require('./../js/temperature.js').tempModule;

var displayTemp = function(city, tempData) {
  $('.showTemp').text("The temp in " + city + " is " + tempData + "Kelvin");
}

$(document).ready(function() {
  var currentTempObject = new Temp();
  $('#temp-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentTempObject.getTemp(city, displayTemp);
  });
});
