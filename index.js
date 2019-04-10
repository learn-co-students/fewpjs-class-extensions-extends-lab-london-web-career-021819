// Your code here

class Polygon{
    constructor(array){
        this._numberOfSides = array.length
        let a = 0
        array.forEach(element => {
            a += element
        });
        this._perimeter = a

        this.array = array
    }
    get getCount (){
        return this._numberOfSides
    }
    get perimeter (){
        return this._perimeter
    }
    
}

class Triangle extends Polygon{
    get isValid ()
    {
        if (this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[0] + this.array[2] > this.array[1])
        {
            return true
        }
        else
        {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid ()
    {
        if (this.array[0] == this.array[1] && this.array[0] == this.array[2] && this.array[0] == this.array[3] )
        {
            return true
        }
        else
        {
            return false
        }
    }
    get area ()
    {
        return Math.pow(this.array[0], 2) 
    }
}