export default class Circle {
  constructor (position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.size = 10;
    // TODO: Add Properties for Modifying Color
  }

  run () {
    this.update();
    this.display();
  }

  update () {
    // TODO: Animation properties happen here (e.g. sets next state)
  }

  display () {
    // Rendering happens here
    circle(
      this.position.x,
      this.position.y,
      this.size * 2
    );
  }
}
