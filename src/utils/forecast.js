const request = require('request');
const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/f71f407712a8d256048fc40f1e3bce63/' + latitude +',' + longitude;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The humidity is ' + body.currently.humidity*100 + '%');
    }
  });
};
module.exports = forecast;
