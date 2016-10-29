const apiUrl = 'http://hp-api-1016.jwright.co';

class FetchLibrary {
  static get(url, callback) {
    const requestUrl = apiUrl + url;
    const requestConfig = new Request(requestUrl, {
      cache: 'default',
      headers: new Headers(),
      method: 'GET',
      mode: 'cors'
    });

    return fetch(requestConfig)
      .then((response) => response.blob())
      .then(callback);
  }

  static post(url, body, callback) {
    const requestUrl = apiUrl + url;
    const requestConfig = new Request(requestUrl, {
      cache: 'default',
      body: body || {},
      headers: new Headers(),
      method: 'POST',
      mode: 'cors'
    });

    return fetch(requestConfig)
      .then((response) => response.blob())
      .then(callback);
  }
}

export default FetchLibrary;
