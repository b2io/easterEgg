export default class b2Sound {
  constructor() {}

  playPulse(amp, freq) {
    const p = new p5.Pulse();
    p.amp(amp);
    console.log(freq);
    p.freq(120 + (200 * freq) / 800); //trying to get it to stick around an octave
    p.start();
  }
}
