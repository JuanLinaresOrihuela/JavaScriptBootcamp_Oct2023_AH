// Write a function named getAreaOfCircle. It takes a radius parameter. It calculates and returns the area of a circle with that radius.
function getAreaOfCircle (radius) {
    return Math.PI * Math.pow (radius,2);
}


// Write a function named getCircumferenceOfCircle. It takes a radius parameter. It calculates and returns the circumference of a circle with that radius.
function getCircumferenceOfCircle (radius) {
    return 2 * Math.PI * radius;
}


// Write a function named getAreaOfSquare. It takes a side parameter. It calculates and returns the area of a square with that side length.
function getAreaOfSquare (side) {
    return Math.pow(side, 2);
}


// Write a function named getAreaOfTriangle. It takes two parameters: base and height. It calculates and returns the area of a triangle with that base and height.
function getAreaOfTriangle (base, height) {
    return 0.5 * base * height;  
}


// Call each of these functions and log the result to the console. (NOTE: None of these functions should use console.log within them. Instead, they must return the calculated value.)
const circleArea = getAreaOfCircle (3);
console.log ("Are of circle = ", circleArea);

const circleCircumference = getCircumferenceOfCircle (3);
console.log ("Circumference of circle = ", circleCircumference);

const squareArea = getAreaOfSquare(5);
console.log ("Area of square = ", squareArea);

const triangleArea = getAreaOfTriangle(4,5);
console.log ("Area of triagle = ", triangleArea);