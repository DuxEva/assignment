"use strict";

const message = document.querySelector(".advice-message");
const advice = document.querySelector("#advice");
const adviceBtn = document.querySelector(".btn");

const getAdvice = function () {
  message.textContent = "Loading advice...";
  // advice.textContent = "Advice...";
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // i need advice to be between quotes
      message.innerHTML = `&ldquo; ${data.slip.advice} &rdquo;`;
      // message.textContent = `&lsquo;${data.slip.advice}&rsquo;`;
      advice.textContent = `Advice #${data.slip.id}`;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
      message.textContent = "Failed to fetch advice. Please try again.";
      advice.textContent = "Error";
    });
};

getAdvice();

adviceBtn.addEventListener("click", getAdvice);
