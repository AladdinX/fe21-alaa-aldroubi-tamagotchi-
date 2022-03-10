import { Tamagotchi } from "./Tamagotchi"

let myTama: Tamagotchi;
let userNameInput = (document.getElementById("user-name") as HTMLInputElement);
const img = document.getElementById("img") as HTMLImageElement;
const feedBtn = document.getElementById("feed") as HTMLButtonElement;
const playBtn = document.getElementById("play") as HTMLButtonElement;
const cleanBtn = document.getElementById("clean") as HTMLButtonElement;
const startBtn = document.getElementById("start") as HTMLButtonElement;


startBtn.addEventListener('click', () => myTama = new Tamagotchi(userNameInput.value, "any"))
feedBtn.addEventListener('click', () => myTama.feed())
playBtn.addEventListener('click', () => myTama.play())
cleanBtn.addEventListener('click', () => myTama.cleanShit())
