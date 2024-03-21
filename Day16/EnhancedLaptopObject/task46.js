//Question 46
/*Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.*/
var laptop = {
    make: "HP",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This is a laptop ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    }
};
laptop.describe();
