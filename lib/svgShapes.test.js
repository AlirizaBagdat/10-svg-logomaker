const { Circle, Triangle, Square } = require('./svgShapes');

describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    const color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="50" fill="${color}" />`);
  });
});

describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle();
    const color = 'red';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="150,50 100,150 200,150" fill="${color}" />`);
  });
});

describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="100" fill="${color}" />`);
  });
});
