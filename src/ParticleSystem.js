export class Particle {
  constructor () {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run () {
    this.update();
    this.display();
  }

  // Method to update position
  update () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  // Method to display
  display () {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
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
  }

  addParticle () {
    this.particles.push(new Particle(this.origin));
  }

  run () {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

};
