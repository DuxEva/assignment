"use strict";
const Person = {
  name: "Katie",
  age: 30,
  greet(color) {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old. my Favorite color is ${color}`
    );
  },
};

// Person.greet();

// // Using call(), apply(), and bind()
const anotherPerson = { name: "Reis", age: 25 };

// // call
Person.greet.call(anotherPerson, 'Black');

// apply
Person.greet.apply(anotherPerson, ['White']);

// bind
const greetReis = Person.greet.bind(anotherPerson);
greetReis('Gray');

document
  .getElementById("myButton")
  .addEventListener("click", function handleClick() {
    console.log(this.id);
    console.log(this.textContent);
  });

document.getElementById("myButton").addEventListener("click", () => {
  console.log(this.id);
  console.log(this.textContent);
});
// console.log(btn);

function testClosure() {
  let count = 0;

  console.log(this);
  return function increase() {
    count++;
    console.log(count);
    // console.log(this);
  };
}

const counter = testClosure();
counter();
counter();
counter();
console.dir(counter);
// counter.increase();

// function createTimer(duration, elementId) {
//   let remainingTime = duration;
//   const element = document.getElementById(elementId);

//   const timerInterval = setInterval(() => {
//     if (remainingTime > 0) {
//       remainingTime--;
//       element.textContent = `Time remaining: ${remainingTime}s`;
//     } else {
//       clearInterval(timerInterval);
//       console.log("Timer has ended.");
//     }
//   }, 1000);
// }

// createTimer(10, "timer1");
