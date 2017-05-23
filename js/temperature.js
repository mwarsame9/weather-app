var apiKey = require('./../.env').apiKey;

Temp = function(){
}

Temp.prototype.getTemp = function(city, displayTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var celsius = Math.round(response.main.temp - 273);
    var fahrenheit = Math.round(1.8*(response.main.temp-273)+32);
    displayTemp(celsius, fahrenheit)
  })

  .fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
}

exports.tempModule = Temp;
