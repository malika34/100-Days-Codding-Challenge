//Question 51
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculatearea(width, height) {
    return width * height;
}
// Refactored into an arrow function
var calculateareaarrow = function (width, height) {
    return width * height;
};
// Example usage of the arrow function
console.log(calculateareaarrow(5, 7)); // Logs the area of the rectangle
