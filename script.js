import { quotes } from "./quotes.js";
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  const particleNum = 100; // Number of circles
  const particleBaseSize = 8; // Base size for the circles

  for (let i = 1; i <= particleNum; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // Random size for each circle
    const circleSize = Math.random() * particleBaseSize + 5;
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;

    // Random position for each circle
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    circle.style.left = `${posX}vw`;
    circle.style.top = `${posY}vh`;

    // Random animation duration and delay
    const moveDuration = Math.random() * 20 + 10; // Between 10 and 30 seconds
    const fadeDuration = Math.random() * 2 + 1; // Between 1 and 3 seconds
    circle.style.animationDuration = `${moveDuration}s, ${fadeDuration}s`;
    circle.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(circle);
  }

  const quoteBox = document.querySelector(".quote-box");
  const controls = document.querySelector(".controls");

  function adjustControlsPosition() {
    const quoteBoxHeight = quoteBox.offsetHeight;
    controls.style.bottom = `${quoteBoxHeight + 30}px`;
  }

  // Adjust position on page load
  adjustControlsPosition();

  // Recalculate and adjust position on window resize
  window.addEventListener("resize", adjustControlsPosition);

  document.getElementById("generate-btn").addEventListener("click", () => {
    const selectedLang = document.getElementById("language-selector").value;
    let quoteSet = getRandomQuote(selectedLang);
    let text = document.getElementById("quote-text");
    let author = document.getElementById("quote-author");
    //console.log(quoteSet);
    text.innerText = quoteSet["quote"];
    author.innerText = "--" + quoteSet["author"];
    adjustControlsPosition();
  });

  function getRandomQuote(language) {
    const quotesArray = quotes[language];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  }
});
