// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set diameter(input) {
        this.radius =  input / 2;
    }

    set circumference(input) {
        this.radius =  input / 2 / Math.PI;
    }

    set area(input) {
        this.radius =  (input / Math.PI) ** 0.5;
    }
}