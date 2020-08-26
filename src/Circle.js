export default class Circle {
  constructor (position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
    this.size = 10;
  }

  run () {
    this.update();
    this.display();
  }

  update () {
  }

  display () {
    circle(
      this.position.x,
      this.position.y,
      this.size * 2
    );
  }
}
