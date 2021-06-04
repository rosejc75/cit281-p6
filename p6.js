class Shape {
    constructor( arraySides = []) {
        this.sides = arraySides;
    }
    //returns value of the length of sides
        perimeter = () => {
            return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            }
        }

/*console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0*/


class Rectangle extends Shape {
    constructor(length = 0, width = 0){
        super([length, width, length, width]);
        //let allSides = [length, width, length, width];
        this.width = width;
        this.length = length;
    }
    area = () => {
        return this.length * this.width;
    }
};
/*console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0*/



 class Triangle extends Shape {
    constructor( sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC])
        this.firstSide = sideA,
        this.secondSide = sideB,
        this.thirdSide = sideC
    }
    area = () =>{
        let sum = (this.firstSide + this.secondSide + this.thirdSide)/2;
        return sum;
        
        } 
    }

/*console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0*/

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for(const sidesData of data) {
    let myObj = null;
    
    switch (sidesData.length){
        case 2:
            let length = sidesData[0]; //Get length from sides
            let width = sidesData[1]; //Get width from sides
            myObj = new Rectangle(length, width)
            let shapeName = length == width ? "Square" : "Rectangle";
            console.log(`${shapeName} with sides ${sidesData} has perimeter of ${myObj.perimeter()} and area of ${myObj.area()}`);
            break;
            
            
            case 3:
                myObj = new Triangle(...sidesData);
                console.log(`Triangle with sides ${sidesData} has perimeter of ${myObj.perimeter()} and area of ${myObj.area()}`);
                break;
                default:
                    console.log(`Shape with ${sidesData.length} sdeds unsupported`)
                    break;
    }
}
