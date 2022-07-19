require('colors');

const inquirer = require('inquirer');

const inquirerMenu = async() => {
  
  const questions = [
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
        {
          value: 1,
          name: `${'1.'.cyan} Search city`
        },
        {
          value: 2,
          name: `${'2.'.cyan} History`
        },
        {
          value: 0,
          name: `${'0.'.cyan} Exit\n`
        },
      ]
    }
  ]
  console.log('==============================='.cyan);
  console.log('         SELECT AN OPTION'.white);
  console.log('===============================\n'.cyan);
  const {option} = await inquirer.prompt(questions);
  return option;
};


const pauseMenu = async () => {
  const questions = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'ENTER'.cyan} for continue: \n`,
    },
  ];
  await inquirer.prompt(questions);
};
 
const readInput = async (message) => {
  const questions = [
    {
      type: 'input',
      name: 'city',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please! Enter an value'.bgRed
        }
        return true
      },
    },
  ];

  const { city } = await inquirer.prompt(questions);

  return city;
};


const listOfPlace = async (cities = []) => {
  const choices = cities.map((city, i) => {
    
    const idx = i + 1;
    return {
      value: city.id,
      name: `${(idx + '.').cyan} ${city.name}`
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.cyan + 'Cancel'
  })

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Selected city',
      choices
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

module.exports = {
  inquirerMenu,
  pauseMenu,
  readInput,
  listOfPlace,
}