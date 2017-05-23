var Temp = require('./../js/temperature.js').tempModule;

var displayTemp = function(celsius, fahrenheit) {
  $('.showCelsius').append(`The temp is ${celsius}\u00B0C`);
  $('.showFahrenheit').append(`The temp is ${fahrenheit}\u00B0F`);
}

$(document).ready(function() {
  var currentTempObject = new Temp();
  $('#temp-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentTempObject.getTemp(city, displayTemp);
  });
});
