const request = require('request');

const fetchMyIP = function(callback) {
    request('https://api.ipify.org?format=json', (error, response, body) => {
      if (error) return console.log(error, null);
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
        return;
      }
  
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });

  };
//Fetch the geo coordinates (Latitude & Longitude) for our IP
const fetcoorByIP = function(IP, callback) {
    request(' https://freegeoip.app/json/', (error, response, body) => {
      if (error) return console.log(error, null);
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
        return;
      }
  
      const ip = JSON.parse(body);
      const coordinates = {latitude: info.data.latitude, longitude: info.data.longitude};
      callback(null, coordinates);
    });

  };

 

fetchMyIP();
  
module.exports = { fetchMyIP };