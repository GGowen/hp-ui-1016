import FetchLib from '../libraries/fetch.js';
import LocationLib from '../libraries/location.js';

class HouseholdsService {
  // POST /api/household
  static create(callback) {
    LocationLib.get(function (location) {
      const payload = {
        lat: location.lat,
        long: location.long,
        image: ''
      };
      const url = '/api/household';
      FetchLib.post(url, payload, function (response) {
        console.log('create response: ', response);
        callback(response);
      });
    });

  }

  // GET /api/household/:long/:lat/S
  static fetch(callback) {
    LocationLib.get(function (location) {
      const url = `/api/households/${location.long}/${location.lat}/S`;
      FetchLib.get(url, function (response) {
        console.log('fetch response: ', response);
        callback(response);
      });
    });
  }

  // GET /api/households/:long/:lat/L
  static fetchAll(callback) {
    LocationLib.get(function (location) {
      const url = `/api/households/${location.long}/${location.lat}/L`;
      FetchLib.get(url, function (response) {
        console.log('fetch all response: ', response);
        callback(response);
      });
    });
  }
}

export default HouseholdsService;
