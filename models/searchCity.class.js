const fs = require('fs');
const { fetchGETOfPlaces, fetchGETWeather } = require("../config/axios.instance");

class Search {

  constructor(history = []) {
    this.history = history;
    //Read database
    this.readDataBase();
  };

  async city(place = '') {
    //Request HTTP
    try {
      const response = await fetchGETOfPlaces.get(`${place}.json`);
      
      return response.data.features.map(city => ({
        id: city.id,
        name: city.place_name,
        longitude: city.center[0],
        latitude: city.center[1]
      }));

    } catch (error) {
      console.log(error);
    }
    return []; // Return a array empty 
  }

  async weatherCity(lon, lat) {
    //Request HTTP
    try {
      const response = await fetchGETWeather({
        params: {
          lat,
          lon,
          appid: process.env.OPENWEATHER_KEY,
          units: 'metric',
          lang: 'es',
        }
      });

      const { weather, main} = response.data
      return {
        description: weather[0].description,
        temperature: main.temp,
        temperature_min: main.temp_min,
        temperature_max: main.temp_max,
      };
    } catch (err) {
      console.log(err);
    };
  };

  get capitalizeFirstLetter() {
    // Return a new array with all words in capital first letter
    // expect those that are equal to 'de'
    return this.history.map(place => {
      let splitWord = place.split(' ');

      splitWord = splitWord.map(word => {
        if (word === 'de') {
           return word[0].toLocaleLowerCase() + word.substring(1);
        };  
        return word[0].toUpperCase() + word.substring(1);
      });

      return splitWord.join(' ');
    });
  }
  saveDataBase() {
    const payload = {
      histories: this.history,
    };

    fs.writeFileSync('./database/places.json', JSON.stringify(payload));
  };

  readDataBase() { 
    
    if (!fs.existsSync('./database/places.json')) return; 

    const info = JSON.parse(fs.readFileSync('./database/places.json', { encoding: 'utf-8' }));

    this.history = info.histories
  }

  addPlaceToHistory(place = '') {
    //Prevent the duplicate;
    if (this.history.includes(place.toLocaleLowerCase())) return;

    this.history = this.history.splice(0,5)

    //Add a new place;
    this.history.unshift(place.toLocaleLowerCase());

    //Save to database
    this.saveDataBase();
  }

};
module.exports = Search;