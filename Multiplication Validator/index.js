const num1 = Math.ceil(Math.random() * 17);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

questionEl.innerText = "What is " + num1 + " multily by " + num2 + "?";
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = "Score: " + score;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
