const calcTip = (bill) => {
  // Not Readable
  // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

let bills = [125, 555, 44];

let tips = [];
let total = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(bills[i] + tips[i]);
// }

console.log(tips);
console.log(total);
