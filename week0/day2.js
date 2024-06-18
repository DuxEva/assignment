// Function that takes a string and capitalizes the first letter of each word
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("hello world this is a test"));

// Other alternative

function capitalize(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalize("hello world this is a test"));

// REVERSE A STRING
function reverseString(str) {
  return str.split("").reverse().join("");
}

// other alternative
function reverseString(str) {
  let reversed = [];
  str.split("").forEach((char) => {
    reversed.unshift(char);
  });
  return reversed.join("");
}

console.log(reverseString("hello world this is a test"));

// CHACKING FOR PALINDROME

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// other alternative

function isPalindrome(str) {
  return str === str.split("").reduce((acc, char) => char + acc, "");
}

console.log(isPalindrome("madam"));

// FUNCTION THAT COUNTS NUMBER OF WORDS IN A STRING

const countWords = (str) => str.split(" ").length;

console.log(countWords("hello world this is a test"));

// FUNCTION THAT DOUBLES EVERT ELEMENT IN AN ARRAY

const doubleArray = (arr) => arr.map((num) => num * 2);

console.log(doubleArray([1, 2, 3, 4, 5]));

// FUNCTION THAT FILTER EVEN ODD NUMBERS FROM AN ARRAY

const filterEvenOdd = (arr) => arr.filter((num) => num % 2 === 0);

console.log(filterEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// FUNCTION THAT RETURNS THE SUM OF ALL ELEMENTS IN AN ARRAY

const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));

// FUNCTION THAT RETURNS THE AVERAGE OF ALL ELEMENTS IN AN ARRAY

const averageArray = (arr) =>
  arr.reduce((acc, num) => acc + num, 0) / arr.length;

console.log(averageArray([1, 2, 3, 4, 5]));

// OBJECTS

fullName = function (person) {
  return `${person.firstName} ${person.lastName}`;
};

function isAdult(person) {
  return person.age >= 18;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

console.log(fullName(person));
console.log(isAdult(person));

filterByAge = function (people, minAge) {
  return people.filter(isAdult);
};

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 17,
  },
  {
    firstName: "Mary",
    lastName: "Johnson",
    age: 30,
  },
];

console.log(filterByAge(people, 18));
