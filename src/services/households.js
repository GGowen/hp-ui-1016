import FetchLib from '../libraries/fetch.js';
import LocationLib from '../libraries/location.js';

class HouseholdsService {
  // POST /api/household
  static create(imageData, callback) {
    console.log('fetching location...');
    LocationLib.get(function (location) {
      const payload = {
        lat: location.lat,
        long: location.long,
        image: imageData
      };
      const url = '/api/household';
      console.log(url, payload);
      FetchLib.post(url, payload, function (response) {
        callback(response);
      });
    });

  }

  // GET /api/household/:long/:lat/S
  static fetch(callback) {
    console.log('fetching location...');
    LocationLib.get(function (location) {
      const url = `/api/households/${location.long}/${location.lat}/S`;
      console.log(url);
      FetchLib.get(url, function (response) {
        callback(response);
      });
    });
  }

  // GET /api/households/:long/:lat/L
  static fetchAll(callback) {
    console.log('fetching location...');
    LocationLib.get(function (location) {
      const url = `/api/households/${location.long}/${location.lat}/L`;
      console.log(url);
      FetchLib.get(url, function (response) {
        callback(response);
      });
    });
  }
}

export default HouseholdsService;
