//Question 57
// Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
var grades = [89, 75, 88, 70, 95, 66];
// Calculates the average grade
var averagegrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// Shows the average grade
console.log(averagegrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.