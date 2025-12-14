// Function to speak text
function speak(text, lang = "en-US") {
  if (!window.speechSynthesis) return;
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = lang;
  window.speechSynthesis.speak(msg);
}

// START BUTTON
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  speak("Welcome! Touch any button to hear and learn letters, numbers, and Arabic letters.");
});

// LETTERS A-Z
const letterKeys = document.getElementById("letterKeys");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
letters.forEach((l) => {
  const b = document.createElement("button");
  b.innerText = l;
  b.onclick = () => speak(Letter ${l});
  letterKeys.appendChild(b);

  const img = document.createElement("img");
  img.src = images/letters/${l}.png; // image folder
  img.alt = Letter ${l};
  letterKeys.appendChild(img);
});

// NUMBERS 1-20
const numberKeys = document.getElementById("numberKeys");
for (let n = 1; n <= 20; n++) {
  const b = document.createElement("button");
  b.innerText = n;
  b.onclick = () => speak(Number ${n});
  numberKeys.appendChild(b);

  const img = document.createElement("img");
  img.src = images/numbers/${n}.png;
  img.alt = Number ${n};
  numberKeys.appendChild(img);
}

// ARABIC LETTERS ا-ے
const arabicKeys = document.getElementById("arabicKeys");
const arabic = [
  ["ا","Alif"],["ب","Bay"],["پ","Pay"],["ت","Tay"],["ٹ","Ttay"],
  ["ث","Say"],["ج","Jeem"],["چ","Chay"],["ح","Hay"],["خ","Khay"],
  ["د","Dal"],["ڈ","Ddal"],["ذ","Zal"],["ر","Ray"],["ڑ","Rray"],
  ["ز","Zay"],["ژ","Zhe"],["س","Seen"],["ش","Sheen"],["ص","Sad"],
  ["ض","Zad"],["ط","Toay"],["ظ","Zoay"],["ع","Ain"],["غ","Ghain"],
  ["ف","Fay"],["ق","Qaf"],["ک","Kaf"],["گ","Gaf"],["ل","Lam"],
  ["م","Meem"],["ن","Noon"],["و","Wao"],["ہ","Hay"],["ھ","Do chashmi hay"],
  ["ء","Hamza"],["ی","Choti ye"],["ے","Bari ye"]
];

arabic.forEach(a => {
  const b = document.createElement("button");
  b.innerText = a[0];
  b.onclick = () => speak(Arabic letter ${a[1]}, "ar-SA");
  arabicKeys.appendChild(b);

  const img = document.createElement("img");
  img.src = images/arabic/${a[0]}.png;
  img.alt = a[1];
  arabicKeys.appendChild(img);
});

// MICROPHONE BUTTON (placeholder for future voice input)
const micBtn = document.getElementById("micBtn");
micBtn.onclick = () => speak("Microphone feature coming soon.");
