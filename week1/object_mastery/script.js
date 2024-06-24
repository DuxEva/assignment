'use strict';

const superHero = {
  name: "Batman",
  secretIdentity: "Bruce Wayne",
  powers: ["Wealth", "Intelligence", "Combat", "Gadgets"],
  weakness: ["Parents", "Guilt"],
  usePower(powerName) {
    if (this.powers.includes(powerName))
      console.log(`${this.name} does have ${powerName} power!`);
    else console.log(`${this.name} does not have ${powerName} power!`);
  },
  revealIdenty() {
    console.log(
      `I am ${this.name} and my secret identity is ${this.secretIdentity}.`
    );
  },
};

superHero.revealIdenty();
superHero.usePower("Wealth");

function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

// const batman = new Superhero(
//   "Spiderman",
//   "Peter Parker",
//   ["Webs", "Agility", "Spider-sense"],
//   ["Mary Jane", "Guilt"]
// );
// console.log(batman);

Superhero.prototype.usePower = function (powerName) {
  if (this.powers.includes(powerName))
    console.log(`${this.name} does have ${powerName} power!`);
  else console.log(`${this.name} does not have ${powerName} power!`);
};

Superhero.prototype.revealIdenty = function () {
  console.log(
    `I am ${this.name} and my secret identity is ${this.secretIdentity}.`
  );
};

// const superman = new Superhero(
//   "Superman",
//   "Clark Kent",
//   ["Flight", "Strength", "Heat Vision"],
//   ["Kryptonite", "Magic"]
// );
// console.log(superman);

// superman.revealIdenty();

const characters = [
  new Superhero(
    "Superman",
    "Clark Kent",
    ["Super Strength", "Flight"],
    "Kryptonite"
  ),
  new Superhero(
    "Batman",
    "Bruce Wayne",
    ["Martial Arts", "Detective Skills"],
    "None"
  ),
  { name: " Iron Man", type: "hero" },
  { name: "Musketeer", type: "hero" },
];

// Use filter to get only superheroes
const filteredCharacters = characters.filter(
  (character) => character instanceof Superhero
);
// console.log(filteredCharacters);

// Use map to get names of characters
const names = characters.map((character) => character.name);
// console.log(names);

// Using forEach to log names
// characters.forEach((character) => console.log(character.name));
const res = document.getElementById("result");
function battle(hero1, hero2) {
  console.log(`${hero1.name} and ${hero2.name} are battling!`);
  const winner = Math.random() > 0.5 ? hero1.name : hero2.name;
  res.innerText = `${winner} wins! 🏆🎉`;
}

const superman = new Superhero(
  "Superman",
  "Clark Kent",
  ["Super Strength", "Flight"],
  "Kryptonite"
);
const batman = new Superhero(
  "Batman",
  "Bruce Wayne",
  ["Martial Arts", "Detective Skills"],
  "None"
);

const button = document.getElementById("battle");
button.addEventListener("click", () =>{ 
  res.innerText = "Battling...";
  setTimeout(() => battle(superman, batman), 3000);
});