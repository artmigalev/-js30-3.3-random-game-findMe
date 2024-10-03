import { Button, Component, Image } from "./Components.js";
import { boxes } from "./index.js";

const imgWelcom = "./rssticky/welcome.webp";
const body = document.body;

const popup = new Component(
  {
    tag: "dialog",
    className: "popup",
  },
  new Image({
    className: "popup-img",
    src: imgWelcom,
    alt: "welcome",
  }),
  new Component(
    {
      className: "container",
    },
    new Button({
      className: "start-game",
      text: "Start Game",
      onClick: () => {
        Array.from(boxes).forEach(function (item, index) {
          item.classList.remove("loadingCards");
        });
        document.querySelector(".popup").close();
      },
    }),
    new Button({
      className: "modal-close",
      text: "Close",
      onClick: () => {
        Array.from(boxes).forEach(function (item, index) {
          item.classList.add("disabled");
        });
        document.querySelector(".popup").close();
      },
    }),
  ),
);
console.log(popup);
popup.setAttributes("open", true);

body.append(popup.getNode());

const resultGame = (winner = true) => {
  const { childNode } = popup.childNode[1];
  childNode[0].node.innerHTML = "Try Again";
  if (winner) {
    popup.childNode[0].node.src = "./rssticky/winner.webp";
    popup.append(
      new Component(
        {
          tag: "p",
          className: "modal-text",
        text: "You win!"}
      )
    )
    childNode[0].onClick = () => {
      document.location.reload();
      console.log("reload");
    };
  } else {
    popup.childNode[0].node.src = "./rssticky/lose.webp";
    popup.append(
      new Component({
        tag: "p",
        className: "modal-text",
        text: "You Lose!",
      }),
    );
  }
  console.log(childNode[0]);
  return body.append(popup.getNode().showModal());
};

export { popup, resultGame };
