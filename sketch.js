import Circle from "./src/Circle.js";
import B2Sound from "./src/Sound.js";

function isInBounds(mouse, circle) {
  const { position, size } = circle;
  const { mouseX, mouseY } = mouse;

  return dist(mouseX, mouseY, position.x, position.y) < size;
}

let sphereA;
let sound;
let canvas;

let mouseHeldInterval = 500; // ms
let mouseHeldCount = 0;
let millisLastPlayed = null;

function resetMouseTimer() {
  millisLastPlayed = null;
  mouseHeldCount = 0;
}

function setup() {
  canvas = createCanvas(900, 600);
  sphereA = new Circle(createVector(width / 2, height / 2));
  sound = new B2Sound();
}
window.setup = setup;

function draw() {
  background(0);
  sphereA.run();

  if (mouseIsPressed && isInBounds({ mouseX, mouseY }, sphereA)) {
    if (!millisLastPlayed || millis() >= millisLastPlayed + mouseHeldInterval) {
      millisLastPlayed = millis();
      sound.play(mouseHeldCount);
      mouseHeldCount += 1;
    }
  }
}
window.draw = draw;

function mouseReleased() {
  sound.stop();
  resetMouseTimer();
}
window.mouseReleased = mouseReleased;
