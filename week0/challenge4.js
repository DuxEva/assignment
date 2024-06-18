const calcTip = (bill) => {
  // Not Readable
  // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

// i want see arguments object of calcTip function
console.log(calcTip.arguments);

let bills = [125, 555, 44];

let tips = [];
let total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(total);
