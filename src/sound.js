export default class b2Sound {
  constructor() {
    this.note = new p5.Pulse();
  }

  playPulse(amp, freq) {
    this.note.amp(amp);
    this.note.freq(120 + (200 * freq) / 800); //trying to get it to stick around an octave
    this.note.start();
  }

  stopPulse() {
    console.log("its working");
    this.note.stop();
  }
}
