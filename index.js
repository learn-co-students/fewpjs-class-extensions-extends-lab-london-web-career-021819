// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let perimeter = 0
    this.sides.forEach(side => perimeter += side)
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]
    return ((a + b > c) && (b + c > a) && (a + c > b))
  }
}

class Square extends Polygon {
  get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]
    let d = this.sides[3]
    return (a === b && b === c && c === d)
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}
