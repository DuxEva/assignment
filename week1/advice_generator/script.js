"use strict";

const message = document.querySelector(".advice-message");
const advice = document.querySelector("#advice");
const adviceBtn = document.querySelector(".btn");

const generateAdvice = async function () {
  message.textContent = "Loading advice...";
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    message.innerHTML = `&ldquo; ${data.slip.advice} &rdquo;`;
    advice.textContent = `Advice #${data.slip.id}`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    message.textContent = "Failed to fetch advice. Please try again.";
    advice.textContent = "Error";
  }
}

generateAdvice();
adviceBtn.addEventListener("click", generateAdvice);
