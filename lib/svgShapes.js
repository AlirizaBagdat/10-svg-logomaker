const fs = require('fs');

class Circle {
  constructor(color) {
    this.color = color;
  }

  getSvgElement() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  getSvgElement() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  getSvgElement() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
  }
}

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;

  switch (shape) {
    case 'circle':
      shapeElement = new Circle(shapeColor);
      break;
    case 'triangle':
      shapeElement = new Triangle(shapeColor);
      break;
    case 'square':
      shapeElement = new Square(shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement.getSvgElement()}
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="24" font-weight="bold">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
}

// module.exports = generateSVG;
module.exports = { Circle, Triangle, Square, generateSVG };


  