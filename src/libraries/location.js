class LocationLibrary {
  static get(callback) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const location = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        callback(location);
      },
      function (err) {
        console.log('Error fetching location: ', err);
      },
      {
        enableHighAccuracy: false,
        timeout: 2000
      }
    );
  }
}

export default LocationLibrary;
