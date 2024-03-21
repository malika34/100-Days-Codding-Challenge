//Question 56
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// A mixed bag of items
let mixedarray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsarray = mixedarray.filter(item => typeof item === "string");

// Show the list of just words

console.log(stringsarray);

