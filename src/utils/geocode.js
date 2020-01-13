const request = require('request');
const geoCode = (adress, callback) =>{
  const  url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ adress +'.json?access_token=pk.eyJ1IjoidG90aGJlbmNlIiwiYSI6ImNrNTVjcXEzMjAxaGczZWttNTV0djRkNnUifQ.Y1ij8P3OCEMP8b9g-EPJ9g&limit=1';
  request({url, json: true}, (error, {body}) => {
    if(error){
      callback('Unable to connect to map service!', undefined);
    } else if(body.features && !body.features.length) {
      callback('Unable to find place', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  })
};
module.exports = geoCode;
