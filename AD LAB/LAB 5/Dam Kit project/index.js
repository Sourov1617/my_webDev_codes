const buttons = document.querySelectorAll(".drum");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonInnerHTML = button.textContent; 
    playSound(buttonInnerHTML);
  });
});

document.addEventListener("keydown", (event) => {
  playSound(event.key); 
});


function playSound(key) {
  const soundMap = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3",
  };

  const soundFile = soundMap[key.toLowerCase()];
  if (soundFile) {
    const audio = new Audio(soundFile); 
    audio.play(); //
  }
}