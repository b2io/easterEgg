import Circle from "./src/Circle.js";
import b2Sound from "./src/sound.js";

let sphereA;
let b;

function setup() {
  createCanvas(900, 600);
  sphereA = new Circle(createVector(width / 2, height / 2));
  b = new b2Sound();
}
window.setup = setup;

function draw() {
  background(0);
  sphereA.run();
}
window.draw = draw;

function mousePressed() {
  b.playPulse(mouseX, mouseY);
}
window.mousePressed = mousePressed;

function mouseReleased() {}
