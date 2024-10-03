import { popup, resultGame } from "./popup.js";

export const boxes = document.getElementsByClassName("box");
const wrapper = document.querySelector(".wrapper");
const winerImg = "./rssticky/contribute.webp";
const loseImg = "./rssticky/mentors-wanted.webp";
const attemptsCount = document.querySelector(".attemps");
const modal = document.querySelector(".popup");
let attempts = 3;
let winnerClick = 0;
console.log();
window.addEventListener("load", (event) => {
  Array.from(boxes).forEach(function (item, index) {
    item.classList.add("loadingCards");
  });
});

const randomWinnerIndex = () => {
  let indArr = new Set(Array.from({ length: boxes.length }, () => Math.round(Math.random(8) * 10)));

  return [...indArr].filter((n) => n <= 8).slice(0, 3);
};
const winnerIndices = randomWinnerIndex();
console.log(randomWinnerIndex());

function clickedBox(event) {
  const click = event.target;
  if (click.className === "box") {
    console.log(winnerIndices);
    click.classList.add("disabled");
    click.classList.add("clicked");
    if (winnerIndices.includes(checked(click))) {
      winnerClick++;
      if (winnerClick === 3) {
        wrapper.removeEventListener("click", clickedBox);

        resultGame(true);
      }

      click.classList.add("disabled");
      setTimeout(() => {
        click.style.backgroundImage = `url(${winerImg})`;

        // click.classList.add("disabled");
      }, 2000);
    } else {
      attemptsCount.innerHTML = `You have ${--attempts} attempts`;
      if (attempts === 0) {
        wrapper.removeEventListener("click", clickedBox);
        resultGame(false);
      }
      setTimeout(() => {
        // click.classList.remove("clicked");
        click.style.backgroundSize = "5em";
        click.style.backgroundImage = `url(${loseImg})`;

        // click.classList.add("disabled");
      }, 2000);
    }
  }
}
function checked(click) {
  let arrBoxes = Array.from(boxes);
  let ind = arrBoxes.findIndex((n) => n === click);
  console.log(ind);
  return ind;
}
wrapper.addEventListener("click", clickedBox);
