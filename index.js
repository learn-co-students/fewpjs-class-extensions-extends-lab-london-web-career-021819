class Polygon {
  constructor(array) {
    this.sides = array
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a,b) => a+b )
  }
}

class Triangle extends Polygon {
  get isValid() {
    return (this.sides[0]+this.sides[1] > this.sides[2] && this.sides[1]+this.sides[2] > this.sides[0])
  }
}

class Square extends Polygon {

  get area() {
    return (this.sides[1] ** 2)
  }

  get isValid() {
    return (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[1] === this.sides[3])
  }
}