export class Particle {
  constructor ({ radius, origin }) {
    this.acceleration = createVector(0, 0.05);
    this.size = createVector(
      random(8,18),
      random(8,18)
    );
    const velocityX = cos(random(-5, 5) * PI);
    const velocityY = sin(random(-5, 5) * PI);
    this.velocity = createVector(
      random(velocityX - 1, velocityY),
      random(velocityX - 1, velocityY)
    );
    // this.velocity = createVector(random(-5, 5), random(-5, 5));
    // console.log('velocityX: velocityY: ', velocityX, velocityY);
    // float x = (float)(radius * Math.Cos(angleInDegrees * Math.PI / 180F)) + origin.X;
    // float y = (float)(radius * Math.Sin(angleInDegrees * Math.PI / 180F)) + origin.Y;
    const posX = (radius + this.size.x + 10) * velocityX + origin.x;
    const posY = (radius + this.size.y + 10) * velocityY + origin.y;
    // const posY
    this.position = createVector(
      posX,
      posY
      // radius + origin.x - this.size.x,
      // radius + origin.y - this.size.y
    )
    // console.log('this.position ', this.position);
    // this.position = origin.copy();
    this.lifespan = 200;
  }

  run () {
    this.update();
    this.display();
  }

  // Method to update position
  update () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 4;
  }

  // Method to display
  display () {
    stroke(200, this.lifespan);
    strokeWeight(0);
    fill(255, this.lifespan);
    ellipse(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

  // Is the particle still useful?
  isDead () {
    return this.lifespan < 0;
  }
}


export class ParticleSystem {
  constructor ({ position }) {
    this.origin = position.copy();
    this.particles = [];
    this.animationLock = null;
  }

  addParticle = ({ radius, origin }) => {
    this.particles.push(
      new Particle({
        radius,
        origin,
      })
    );
  }

  run = (props) => {
    this.origin = props.position.copy();
    if (this.animationLock) {
      this.animatePop(props);
    }
    this.animateParticles();
  }

  animateParticles = () => {
    if (this.particles.length < 1) return;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  animatePop = ({position, radius}) => {
    if (this.particles.length >= 15) {
      this.animationLock = null;
    }
    this.addParticle({
      origin: position,
      radius,
    });
  }

  triggerPop = () => {
    this.animationLock = 'pop';
  }
};
