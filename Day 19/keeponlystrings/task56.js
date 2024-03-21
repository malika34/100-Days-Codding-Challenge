//Question 56
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
var mixedarray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
var stringsarray = mixedarray.filter(function (item) { return typeof item === "string"; });
// Show the list of just words
console.log(stringsarray);
