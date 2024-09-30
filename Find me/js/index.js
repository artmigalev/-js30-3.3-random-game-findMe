const boxes = document.getElementsByClassName("box");
const wrapper = document.querySelector(".wrapper");

const randomWinnerIndex = () => {
  let indArr = new Set(Array.from({ length: boxes.length }, () => Math.round(Math.random(8) * 10)));

  return [...indArr].filter((n) => n <= 8).slice(0, 3);
};
console.log(randomWinnerIndex());
