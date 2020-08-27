import Circle from './src/Circle.js'

let sphereA;

window.setup = function setup() {
  createCanvas(900, 600);
  const canvasCenter = createVector(width / 2, height / 2);

  sphereA = new Circle({ position: canvasCenter })
}

window.draw = function () {
  background(0);
  sphereA.run();
}

window.mousePressed = function () {
  sphereA.handleMousePressed();
}

window.mouseReleased = function () {
  sphereA.handleMouseRelease();
}
