export class Square {
  constructor(side) {
    this.side = side;
  }

  squarePerimeter() {
    let result = 4 * this.side;
    return result;
  }

  squareArea() {
    let result = this.side * this.side;
    return result;
  }

  rectanglePerimeter(length, width) {
    let result = 2 * (length + width);
    return result;
  }

  rectangleArea(length, width) {
    let result = length * width;
    return result;
  }
}
