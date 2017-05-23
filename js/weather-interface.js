var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTempK = function(city, tempData) {
  $('.showTemp').text("The temp in " + city + " is " + tempData + " Kelvin");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity, displayTempK);
  });
});
