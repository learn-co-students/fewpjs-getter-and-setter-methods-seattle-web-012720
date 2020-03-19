// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    get area(){
        return Math.PI * this.radius ** 2
    }
    set diameter(value){
        this.radius = value / 2
    }
    set circumference(value){
        this.radius = value / Math.PI / 2
        //Math.PI * this.diameter
    }
    set area(value){
        this.radius = Math.sqrt(value / Math.PI)
        //Math.PI * this.radius ** 2
    }
}
let circle = new Circle(5)
console.log(circle.radius)
circle.area(10)
console.log(circle.radius)