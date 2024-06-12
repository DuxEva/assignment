const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const john = {
  fullName: "John smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

// 

// const result =
  // mark.bmi > john.bmi
  //   ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`
  //   : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`;

// console.log(result);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`);
}else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`);
} else {
  console.log(`Both have the same BMI`);
}