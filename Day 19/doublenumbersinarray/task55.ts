//Question 55
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Starts with a list of numbers
let numbers:number[]=[1, 2, 3, 4, 5];

//Double each number
let doublenumbers = numbers.map(number => number *2 );

// Shows the new list of doubled numbers
console.log(doublenumbers);

// This line takes each number, doubles it, and puts it in a new list.