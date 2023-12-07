const inquirer = require('inquirer');
const fs = require('fs');
// const generateSVG = require('./lib/svgShapes'); // Create this module to generate the SVG
const { Circle, Triangle, Square, generateSVG } = require('./lib/svgShapes');

// Now you can create instances of Circle, Triangle, and Square
const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

// Do whatever you need with these instances...


async function main() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);

    // Call the function to generate the SVG based on the user input
    generateSVG(userInput);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
