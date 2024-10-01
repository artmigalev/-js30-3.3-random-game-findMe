import { Button, Component,Image } from "./Components.js";

const imgWelcom = './rssticky/welcome.webp'
const body =document.body

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
        document.querySelector(".popup").style.display = "none";
      },
    }),
    new Button({
      className: "modal-close",
      text: "Close",
      onClick: () => {
        document.querySelector(".popup").style.display = "none";
      },
    }),
  ),
);

body.append(popup.getNode())


export {popup}