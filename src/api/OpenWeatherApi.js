const axios = require('axios');

const key = 'db55c1d42642ef65aff9ac8f322f3b44';
const url = 'http://api.openweathermap.org/data/2.5/weather?appid='+key;

module.exports = {
  getWeather: (location) => {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${url}&q=${encodedLocation}`;

    axios.get(requestUrl)
      .then(resp => {
        if (resp.data.cod && resp.data.message){
          throw new Error(resp.data.message)
        } else {
          return resp.data.main;
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }

}
