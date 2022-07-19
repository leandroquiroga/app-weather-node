const dateActually = require("../config/date");

const showResult = (selectPlace = {}, weather = {}) => {
  const date = dateActually();

  const { name } = selectPlace;
  const { description, temperature, temperature_min, temperature_max } = weather;

  console.log('\n Information of the city \n'.cyan);
  console.log('City: '.cyan, name);
  console.log('Temperature: '.cyan, temperature);
  console.log('Temp min: '.cyan, temperature_min);
  console.log('Temp max: '.cyan, temperature_max);
  console.log('Description: '.cyan, description);
  console.log('Date: '.cyan, date );
  console.log();
};

module.exports = showResult;