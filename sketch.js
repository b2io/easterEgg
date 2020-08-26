import Circle from "./src/Circle.js";
import sound from "./src/sound.js";

let sphereA;

function setup() {
  createCanvas(900, 600);
  sphereA = new Circle(createVector(width / 2, height / 2));
}
window.setup = setup;

function draw() {
  background(0);
  sphereA.run();
}
window.draw = draw;
