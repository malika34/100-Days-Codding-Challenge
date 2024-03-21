//Question 47
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
{make:"Dell", model:"XPS15", year:2021},
{make:"Apple", model:"Macbook Pro", year: 2020},
{make:"HP", model:"Specter x360", year:2021},
]
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
