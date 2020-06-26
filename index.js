const inquirer = require('inquirer');
const writeStory = require('./writeStory');
// take in a  town name, a gender, kin type, kin's name, animal name, 
// animal noise, noun thing, noun place, and your name
// 1. run inquirer prompt questions
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your name',
    name: 'author'
  },
  {
    type: 'input',
    message: 'Town name?',
    name: 'town'
  },
  {
    type: 'input',
    message: 'Name a family member',
    name: 'kinName'
  },
  {
    type: 'input',
    message: 'Who are they to you',
    name: 'kinType'
  },
  {
    type: 'input',
    message: 'Gender ("They","He", "She")',
    name: 'gender'
  },
  {
    type: 'input',
    message: 'Name an animal',
    name: 'animalName'
  }, {
    type: 'input',
    message: 'What noise does the animal make',
    name: 'animalNoise'
  },
  {
    type: 'input',
    message: 'Name a random object',
    name: 'objectName'
  },
  {
    type: 'input',
    message: 'Name a place you want to go',
    name: 'placeName'
  }
])
  // 2. and THEN do this
  .then((response) => {
    writeStory(response);
  })
// // object constructor
// const Person = (name, glasses) => {
//   this.name = name,
//     this.glasses = glasses
// }
// // how to initiate constructor
// const Christina = new Person("Christina", true);
// const Michael = new Person("Michael", true);
// const Jennifer = new Person("Jennifer", false);
// // put constructors into array
// const people = [Christina, Jennifer, Michael];
// // mapping
// // name convention is to take plural of array name and return singular of array name
// const hasPet = people.map((person) => {
//   person.hasPet = false;
//   return person
// });
// // console.log(hasPet);
// // filtering
// const noGlasees = people.filter((person) => {
//   return person.glasses === false
// })
// const pets = ["Hugo", "Chunky"];
// // console.log(noGlasees);
// const peopleAndPets = [...people, ...pets];
// console.log(peopleAndPets);
