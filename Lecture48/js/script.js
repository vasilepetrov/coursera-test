// // Function constructors
// function Circle (radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };


// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);



function Circle  (radius) {
	this.radius = radius;
}
Circle.prototype.getArea = 
function () {
		return Math.PI * Math.pow(this.radius, 2);
	};

var myCircle = new Circle(10);  // new Object();  We can't return anything from a function constructor; it has to remain without a return value
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle)