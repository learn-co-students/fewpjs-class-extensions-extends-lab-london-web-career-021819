// Your code here
class Polygon {
  constructor(arr) {
    this.arr = arr
  }

  get getCount() {
    return this.arr.length
  }

  get perimeter() {
    let perimeter = 0
    this.arr.forEach(side => {
      perimeter += side
    })
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.getCount == 3) {
      if ((this.arr[0] + this.arr[1] > this.arr[2]) && (this.arr[1] + this.arr[2] > this.arr[0]) && (this.arr[0] + this.arr[2] > this.arr[1])) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.getCount == 4) {
      if (this.arr[0] == this.arr[1] && this.arr[2] == this.arr[3] && this.arr[0] == this.arr[3]) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  get area() {
    if(this.isValid){
      return (this.arr[0]*this.arr[1])
    }
  }
}









//
