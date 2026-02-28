// Typing Animation

const words = ["Legal", "Logical Reasoning", "English", "General Knowledge"];
const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
 
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});


// Button Click Effect + Future Redirect Placeholder

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {

  startBtn.innerHTML = "Loading...";
  startBtn.disabled = true;

  setTimeout(() => {
    // Future me yaha subject selection page pe redirect karenge
    window.location.href="pages/subject.html";
   
    startBtn.innerHTML = `<i class="ri-rocket-line"></i> Start Practice Test`;
    startBtn.disabled = false;
  }, 800);

});