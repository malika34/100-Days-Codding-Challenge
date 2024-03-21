//Question 48
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let priceoflaptops: number[] = [900, 700, 600];
let priceoflaptops2: number[] = [1500, 1200, 1100];
let combinedPrices: number[] = [...priceoflaptops, ...priceoflaptops2].sort(
  (a, b) => a - b
);
console.log(combinedPrices);