//Question 49
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Defines a function that accepts multiple hobbies as arguments
function loghobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // Loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        // Logs a statement for each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
// Calls the function with three hobbies
loghobbies("Exercising", "Coding", "Gaming");
