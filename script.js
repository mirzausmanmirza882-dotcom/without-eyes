// Voice function
function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

// Start Button
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  mainContent.classList.remove("hidden");
  speak("Welcome! Use the letters, numbers, and Arabic letters below.");
});

// Letters A-Z
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letterKeys = document.getElementById("letterKeys");

letters.forEach(letter => {
  const btn = document.createElement("button");
  btn.innerText = letter;
  btn.addEventListener("click", () => {
    speak("Letter " + letter);
  });
  letterKeys.appendChild(btn);
});

// Numbers 1-20
const numbers = Array.from({length: 20}, (_, i) => i + 1);
const numberKeys = document.getElementById("numberKeys");

numbers.forEach(num => {
  const btn = document.createElement("button");
  btn.innerText = num;
  btn.addEventListener("click", () => {
    speak("Number " + num);
  });
  numberKeys.appendChild(btn);
});

// Arabic Letters ا–ے
const arabicLetters = ["ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ","د","ڈ","ذ","ر","ڑ","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ہ","ھ","ء","ی","ے"];
const arabicKeys = document.getElementById("arabicKeys");

arabicLetters.forEach(letter => {
  const btn = document.createElement("button");
  btn.innerText = letter;
  btn.addEventListener("click", () => {
    speak("Arabic letter " + letter);
  });
  arabicKeys.appendChild(btn);
});

// Microphone placeholder
const micBtn = document.getElementById("micBtn");
micBtn.addEventListener("click", () => {
  speak("Microphone activated. Voice commands not yet implemented.");
});
