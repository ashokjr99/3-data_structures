class Circle {
  constructor(radius) {
    this.circleRadius = radius;
  }

  getArea() {
    return (Math.PI * this.circleRadius ** 2).toFixed(3);
  }

  getCircumference() {
    return (2 * Math.PI * this.circleRadius).toFixed(2);
  }
}

let circle1 = new Circle(2);

console.log(circle1.getCircumference());
console.log(circle1.getArea());

//
