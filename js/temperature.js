var apiKey = require('./../.env').apiKey;

Temp = function(){
}

Temp.prototype.getTemp = function(city, displayTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemp(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
}

exports.tempModule = Temp;
