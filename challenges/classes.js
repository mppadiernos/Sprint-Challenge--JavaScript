// 1. Copy and paste your prototype in here and refactor into class syntax.

class KuboidMaker{
    constructor(attr){
        this.length             = attr.length;
        this.width              = attr.width;
        this.height             = attr.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}
class KubeMaker extends KuboidMaker {
    constructor(cAttr) {
        super(cAttr);
    }
    dimensions() {
        return this.surfaceArea() * 3;
    }
}
let kuboid = new KubeMaker({
    length:     4,
    width:      5,
    height:     5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(kuboid.volume()); // 100
console.log(kuboid.surfaceArea()); // 130
console.log(kuboid.dimensions()); // 390


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.