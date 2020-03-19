// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return pi * this.diameter
    }

    get area() {
        return pi * this.radius ** 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }
    
    set circumference(newCircumference) {
        this.radius = newCircumference/(2 * pi)
    }

    set area(newArea) {
        this.radius = (newArea/pi) ** 0.5
    }
}