let audio = new AudioContext();
let audioGain = audio.createGain();
let currentGain = audioGain.gain.value;
let soundGenerator = audio.createOscillator();

const setCustomInterval = (customFunction) => {
  setInterval(customFunction, 1000);
};

const startAudio = () => {
    soundGenerator = audio.createOscillator();
    soundGenerator.type = "sine";
    soundGenerator.connect(audio.destination);
    soundGenerator.start(0);
}
const stopAudio = () => {
    startAudio();
    audioGain.gain.exponentialRampToValueAtTime(0.00001, audio.currentTime + 1);
    console.log("AUDIO stopped");
};

const timer5sec = () => {
  setTimeout(() => {
    // Código gerador de som.
    startAudio();
    stopAudio();
  }, 5000);
  // select30secBtn
};

const timer30sec = () => {
  setTimeout(() => {
    // Código gerador de som.
    startAudio();
    stopAudio();
  }, 30000);
  // select30secBtn
};

const timer1minBtn = () => {
  setTimeout(() => {
    // Código gerador de som.
    startAudio();
    stopAudio();
  }, 60000);
  // select1minBtn
};

const timer2minBtn = () => {
  setTimeout(() => {
    // Código gerador de som.
    startAudio();
    stopAudio();
  }, 120000);
  // select2minBtn
};