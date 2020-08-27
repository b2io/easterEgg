
export default class Circle {
  constructor (position) {
    randomSeed();
    this.acceleration = createVector(0, 0.05)
    this.velocity = createVector(random(-1, 1), random(-1, 0))

    this.size = 10
    this.minSize = 150;

    this.position = position.copy()

    this._wiggleAngle = createVector(
      random(-1,1),
      random(-1,1)
    )
    this.wiggleRange = createVector(0.5,0.4);
    this.wiggleSpeed = 0.04;

    this._scaleAngle = 0;
    this.scaleRange = 0.05;
    this.scaleSpeed = 0.075;

    // TODO: Add Properties for Modifying Color
  }

  run () {
    this.update();
    this.display();
  }

  update () {
    // TODO: Animation properties happen here (e.g. sets next state)
    this.pulse();
    this.wiggle();
  }

  display () {
    // NOTE: Rendering happens here
    circle(
      this.position.x,
      this.position.y,
      this.size
    );
  }

  pulse () {
    const size = this.size
    this.size = (sin(this._scaleAngle) * this.scaleRange * this.minSize) + this.minSize
    this._scaleAngle += this.scaleSpeed;
  }

  wiggle () {
    const xCurrentPos = this.position.x;
    const yCurrentPos = this.position.y;

    this.position.x = (sin(this._wiggleAngle.x) * this.wiggleRange.x) + xCurrentPos;
    this.position.y = (sin(this._wiggleAngle.y) * this.wiggleRange.y) + yCurrentPos;

    this._wiggleAngle.x += random(this.wiggleSpeed);
    this._wiggleAngle.y += random(this.wiggleSpeed);
  }
}

