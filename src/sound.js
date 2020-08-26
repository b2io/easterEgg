import { p5 } from "p5";

export default class b2Sound {
  constructor() {}

  playPulse() {
    const p = new p5.Pulse();
    p.amp(0.5);
    p.freq(260);
    p.start();
  }
}
