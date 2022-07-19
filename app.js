require('dotenv').config();
const { inquirerMenu, pauseMenu, readInput, listOfPlace } = require("./helpers/inquirer");
const showResult = require("./helpers/showResult");
const Search = require("./models/searchCity.class");

const main = async() => {
  const search = new Search();
  let option;
  do {
    option = await inquirerMenu();

    switch (option) { 
      case 1:
        //Show message;
        const place = await readInput('City: '.cyan);

        //Search City;
        const cities = await search.city(place);

        //Select an place;
        const id = await listOfPlace(cities);        
        if (id === '0') continue; 
        const selectPlace = cities.find(city => city.id === id);
        
        // Save DB
        search.addPlaceToHistory(selectPlace.name);
        //Weather;
        const { longitude, latitude } = selectPlace;
        const weather = await search.weatherCity(longitude, latitude);
        
        //Show result;
        showResult(selectPlace,weather);
        break;
      case 2:
        //Show history 
        search.capitalizeFirstLetter.forEach((city, i) => {
          const idx = `${i + 1}.`.cyan;
          console.log(idx, city);
        });
        console.log();
        break;
      case 0:
        break;
    };
    // if(option !== 0) await pauseMenu();
    
  } while (option !== 0);
  console.clear();
};
main();