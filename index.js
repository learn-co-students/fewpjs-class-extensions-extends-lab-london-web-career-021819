class Polygon {
  constructor (sides) {
    this.sides = sides
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, num) => total + num)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const s = this.sides
    if (s[0] > s[1] + s[2] || s[1] > s[0] + s[2] || s[2] > s[1] + s[0]) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get area() {
    return Math.pow(this.sides[0], 2)
  }

  get isValid() {
    const s = this.sides
    if (s[0] === s[1] && s[0] === s[2] && s[0] === s[3]) {
      return true
    } else {
      return false
    }
  }
}
