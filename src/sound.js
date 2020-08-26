export default class b2Sound {
  constructor() {}

  playPulse() {
    const p = new Pulse();
    p.amp(0.5);
    p.freq(260);
    p.start();
  }
}
