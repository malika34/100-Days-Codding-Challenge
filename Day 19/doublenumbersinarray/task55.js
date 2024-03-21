//Question 55
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Starts with a list of numbers
var numbers = [1, 2, 3, 4, 5];
//Double each number
var doublenumbers = numbers.map(function (number) { return number * 2; });
// Shows the new list of doubled numbers
console.log(doublenumbers);
