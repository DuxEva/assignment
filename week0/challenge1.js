"use strict";

const calcAverage = (m1, m2, m3) => {
  return (1 / 3) * (m1 + m2 + m3);
};

const avgDolphins = calcAverage(54, 21, 27);
const avgKoalas = calcAverage(90, 60, 62);

function checkWinner(dolphineScore, koalasScore) {
  return dolphineScore >= 2 * koalasScore
    ? console.log(`Dolphine wins with ${dolphineScore} points`)
    : koalasScore >= 2 * dolphineScore
    ? console.log(`Koalas wins with ${koalasScore} points`)
    : console.log("No one wins");
}

checkWinner(avgKoalas, avgDolphins);
