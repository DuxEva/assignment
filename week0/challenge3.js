function calcBmi() {
  return (this.bmi = this.mass / this.height ** 2);
}

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: calcBmi,
};

const john = {
  fullName: "John smith",
  mass: 92,
  height: 1.95,
  calcBMI: calcBmi,
};

// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(this)


const arr = Object.entries(mark)
console.log(arr)

for (let [key, value] of arr) {
  console.log(`${key}: ${value}`);
}

// Object.values(john).forEach((value) => {
//   console.log(` ${value}`);
// })

// const result =
// mark.bmi > john.bmi
//   ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`
//   : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`;

// console.log(result);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`
//   );
// } else {
//   console.log(`Both have the same BMI`);
// }

// const arr = [1, 2, 54, 60, 11, 19];

// for(let i of arr) {
//   console.log(i);
// }