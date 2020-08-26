class b2Sound {
  constructor() {
    console.log("nice");
  }

  play() {
    const p = new p5.Pulse();
    p.amp(0.5);
    p.freq(260);
  }
}
