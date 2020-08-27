
export default class Circle {
  constructor ({
    position,
    size = 10,
  }) {
    randomSeed();
    this.acceleration = createVector(0, 0.05)
    this.velocity = createVector(random(-1, 1), random(-1, 0))

    this._size = null;
    this.size = size;
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

    this.popRange = 20;
    this.popSpeed = 10;
    this._popSpeed = 10

    this.animationLock = null;
    this.timer = null;

    // TODO: Add Properties for Modifying Color
  }

  run () {
    this.update();
    this.display();
  }

  update () {
    // NOTE: Animation properties happen here (e.g. sets next state)
    if (!this.animationLock) {
      this.animatePulse();
      this.animateWiggle();
      return;
    }
    if (this.animationLock === 'pop') {
      this.animatePop();
    } else {
      this.animateExplode();
    }
  }

  display () {
    // NOTE: Rendering happens here
    circle(
      this.position.x,
      this.position.y,
      this.size
    );
  }

  checkInBound () {
    const distanceToOrigin = dist(
      this.position.x,
      this.position.y,
      mouseX,
      mouseY
    )
    return distanceToOrigin <= (this.size / 2);
  }

  checkIsClickSustained () {
    if (!this.timePressed) {
      this.timePressed = Date.now();
      this._size = this.size;
    }
    // this.size +=
  }

  checkQuickClick () {
    return Date.now() - this.timer < 500;
  }

  handleMousePressed () {
    if (this.animationLock) return;
    const inBounds = this.checkInBound();
    if (!inBounds) return;
    if (!this.timer) {
      this.timer = Date.now();
    }
  }

  handleMouseRelease () {
    if (this.animationLock || !this.timer) return;
    const isSingleClick = this.checkQuickClick();
    this.timer = null;
    this.animationLock = isSingleClick ? 'pop' : 'explode';
    console.log('this.animationLock: ', this.animationLock);
  }

  animateExplode () {
  }

  animatePop () {
    if (!this._size) {
      this._size = this.size;
    }
    const isLess = this.size < this._size - this.popRange
    const isMore = this.size >= this._size + this.popRange
    if (isLess) {
      this.size = this._size;
      this._size = null;
      this.animationLock = null;
      this._popSpeed = this.popSpeed;
      return;
    } else if (isMore) {
      this._popSpeed *= -1;
    }
    this.size += this._popSpeed;
  }

  animatePulse () {
    const size = this.size
    this.size = (cos(this._scaleAngle) * this.scaleRange * this.minSize) + this.minSize
    this._scaleAngle += this.scaleSpeed;
  }

  animateWiggle () {
    const xCurrentPos = this.position.x;
    const yCurrentPos = this.position.y;

    this.position.x = (sin(this._wiggleAngle.x) * this.wiggleRange.x) + xCurrentPos;
    this.position.y = (cos(this._wiggleAngle.y) * this.wiggleRange.y) + yCurrentPos;

    this._wiggleAngle.x += random(this.wiggleSpeed);
    this._wiggleAngle.y += random(this.wiggleSpeed);
  }
}

