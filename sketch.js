import { ParticleSystem } from './src/ParticleSystem.js';
import Circle from './src/Circle.js'

let sphereA;
let emitter;

window.setup = function setup() {
  createCanvas(900, 600);
  const canvasCenter = createVector(width / 2, height / 2);
  emitter = new ParticleSystem({ position: canvasCenter });
  sphereA = new Circle({ position: canvasCenter })
}

window.draw = function () {
  background(0);
  FPS();
  sphereA.run();
  emitter.run({
    position: sphereA.position,
    radius: sphereA.size/2,
  });
}

window.mousePressed = function () {
  sphereA.handleMousePressed();
}

window.mouseReleased = function () {
  sphereA.handleMouseRelease({
    handlePop: emitter.triggerPop,
  });
}

function FPS () {
  let fps = frameRate();
  fill(255);
  stroke(0);
  text("FPS: " + fps.toFixed(2), 10, height - 10);
}
