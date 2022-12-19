// Object literals and "this"
var literalCircle = {  // new Object when you open the curly braces like this. 
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;  // When you have an inner function within another function, this keyword starts pointing to the global object (that's why in the video the radius remained the same) This is why they set var self = this;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());



