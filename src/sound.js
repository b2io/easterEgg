export default class b2Sound {
  constructor() {}

  playPulse(amp, freq) {
    const p = new p5.Pulse();
    p.amp(0.3);
    p.freq(freq);
    p.start();
  }
}
