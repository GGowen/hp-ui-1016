class LocationLibrary {
  static get(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const location = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      console.log('Location: ', location);
      callback(location);
    });
  }
}

export default LocationLibrary;
