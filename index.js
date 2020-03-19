// Add your Circle class here

class Circle {
    constructor(radius){

        this.radius = radius
    }

   

    get diameter(){
        return this.radius * 2 
    }

    set diameter(diameter){
         this.radius = diameter/2
    }

    get circumference(){
        return (this.radius * 2) * Math.PI
    }

    get area(){
        return (this.radius ** 2) * Math.PI
    }

    set circumference(circumference){
        let pi = Math.PI
        this.radius = circumference/(2*pi)
    }

}