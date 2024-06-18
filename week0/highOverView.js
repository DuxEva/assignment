'use strict';
// Garbage Collection
let a;
// Function stored in a variable
const arr = [1, 2, 54, 60, 11, 19];
console.log(arr);
const isEven = (num) => num % 2 === 0;
// Function passed as an argument
const evenNumbers = arr.filter(isEven);
console.log(evenNumbers);

// Function stored data in  structure
const obj = {
  name: "John Doe",
  birthYear: 1990,
  job: "teacher",
  age: function () {
    return 2024 - this.birthYear;
  },
};
console.log(obj.age());
// Function returned by function
function multiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = multiplier(2);
console.log(double(5));

// Non blocking function
console.log("Start");
setTimeout(() => {
  console.log("Hello World");
}, 2000);
console.log("End");

// Web API
const title = document.querySelector(".title");
console.log(title);