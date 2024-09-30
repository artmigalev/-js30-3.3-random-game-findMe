const boxes = document.getElementsByClassName("box");
const wrapper = document.querySelector(".wrapper");
const winerImg = './rssticky/contribute.webp'
const loseImg = './rssticky/mentors-wanted.webp'

const randomWinnerIndex = () => {
  let indArr = new Set(Array.from({ length: boxes.length }, () => Math.round(Math.random(8) * 10)));

  return [...indArr].filter((n) => n <= 8).slice(0, 3);
};
const winnerIndices =randomWinnerIndex()
console.log(randomWinnerIndex());

function clickedBox(event) {
  const click = event.target;
  if (click.className === "box") {
    console.log(winnerIndices);

    if (winnerIndices.includes(checked(click))) {
      click.classList.add("cliked");
      setTimeout(() => {
        click.classList.remove("cliked");
        click.style.backgroundImage = `url(${winerImg})`;

          click.classList.add('disabled')
        }, 2000);
      } else {
        click.classList.add("cliked");
        setTimeout(() => {
          click.classList.remove("cliked");
          click.style.backgroundSize = "5em";
          click.style.backgroundImage = `url(${loseImg})`;

          click.classList.add('disabled')
        }, 2000);
      }
  }
}
function checked(click){
  let arrBoxes = Array.from(boxes)
  let ind = arrBoxes.findIndex(n => n === click)
  console.log(ind);
  return ind

}
wrapper.addEventListener("click", clickedBox);

