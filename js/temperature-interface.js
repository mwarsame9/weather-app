var Temp = require('./../js/temperature.js').tempModule;


$(document).ready(function() {
  var currentTempObject = new Temp();
  $('#temp-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    var tempConvert = $("#temp-convert").val();
    var displayTemp = function(celsius, fahrenheit) {
      if (tempConvert == "celsius") {
        $('.showCelsius').text(`The temp is ${celsius}\u00B0C`);
      } else {
        $('.showFahrenheit').text(`The temp is ${fahrenheit}\u00B0F`);
      }
    }
    currentTempObject.getTemp(city, displayTemp);
  });
});
