const axios = require('axios');


const fetchGETOfPlaces = axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
  params: {
    'access_token': process.env.TOKEN_MAPBOX,
    'language': 'es',
    'limit': 5,
  },
});

const fetchGETWeather = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather/`
});
module.exports = {
  fetchGETOfPlaces,
  fetchGETWeather,
}