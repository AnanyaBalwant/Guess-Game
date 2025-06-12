let luckyNumber;
let attempts;
let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;

document.getElementById("score").textContent = score;

function startGame() {
  luckyNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 3;
  document.getElementById("result-box").innerHTML = `<p>You have 3 attempts to guess the number!</p>`;
  document.getElementById("guess-input").value = "";
}

function submitGuess() {
  const input = document.getElementById("guess-input");
  const guess = Number(input.value);

  if (isNaN(guess) || guess < 1 || guess > 50) {
    alert("🚫 Please enter a number between 1 and 50!");
    return;
  }

  if (attempts <= 0) {
    document.getElementById("result-box").innerHTML = `<p>No attempts left! The number was <strong>${luckyNumber}</strong>.</p>`;
    return;
  }

  if (guess === luckyNumber) {
    document.getElementById("result-box").innerHTML = `<p>🎉 Correct! The number was <strong>${luckyNumber}</strong>!</p>`;
    score++;
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
    return;
  } else {
    attempts--;
    if (attempts > 0) {
      document.getElementById("result-box").innerHTML = `<p> Wrong! ${attempts} attempt(s) left.</p>`;
    } else {
      document.getElementById("result-box").innerHTML = `<p> Out of attempts! The number was <strong>${luckyNumber}</strong>.</p>`;
    }
  }

  input.value = "";
}

// Create floating petals on screen load
function createFloatingPetals(count) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    const size = Math.random() * 10 + 15;
    petal.style.width = petal.style.height = `${size}px`;
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";

    const hue = 330 + Math.random() * 20;
    petal.style.background = `radial-gradient(circle at 8px 8px, hsl(${hue}, 100%, 85%) 40%, transparent 41%)`;

    document.body.appendChild(petal);
  }
}

// Start everything
window.onload = () => {
  startGame();
  createFloatingPetals(30);
};
