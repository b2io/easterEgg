const notesToFreq = {
  G: 49,
  A: 55,
  B: 61.74,
  D: 36.71,
  E: 41.2,
  C: 32.7,
};

const pitches = ["G", "A", "B", "D", "E", "G", "C"]; // G Maj Pentatonic
const octaves = [2, 3, 4];
const velocityIncrement = 0.05;

export default class B2Sound {
  constructor() {
    this.sound = new p5.PolySynth(undefined, 12);
  }

  play(countHeld) {
    // userStartAudio();

    // this.sound.amp(amp);
    // this.sound.freq(120 + (200 * freq) / 800); //trying to get it to stick around an octave
    // this.sound.start();

    const pitch = pitches[countHeld % pitches.length];
    const octave = octaves[countHeld % octaves.length];
    const note = notesToFreq[pitch] * octave;
    const velocity = Math.min(velocityIncrement * (1 + countHeld), 1);

    console.log("note", note, this.sound.notes);

    console.log("countHeld", countHeld);

    if (countHeld > 30) {
      this.sound.noteRelease(); // Fix sounds glitching eventually
    }

    this.sound.noteAttack(note, velocity);
  }

  stop() {
    this.sound.noteRelease();
  }
}
