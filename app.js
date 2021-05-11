let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.getElementById(".score-board");
const resultText = document.getElementById("resultText");
const paperOpt = document.getElementById("p");
const scicOpt = document.getElementById("s");
const rockOpt = document.getElementById("r");

const compOpt = () => {
  const options = ["p", "r", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};
compOpt();

const resultconverter = (letter) => {
  if (letter === "p") return "PAPEL";
  if (letter === "r") return "PIEDRA";
  else "TIJERAS";
};

const win = () => {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  resultText.innerHTML = "You win! Congrats :D";
};
const lose = () => {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  resultText.innerHTML = "Good luck next time!";
};
const draw = () => {
  userScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  resultText.innerHTML = `Keep it up!`;
};

const game = (userOpt) => {
  const computer = compOpt();
  console.log("user opt", userOpt);
  console.log("comp opt", computer);
  switch (userOpt + computer) {
    case "rp":
    case "pr":
    case "sp":
    case "rs":
      console.log("user wins");
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("user loses");
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("draw");
      draw();
      break;
  }
};

const mainfunction = () => {
  paperOpt.addEventListener("click", () => {
    game("p");
  });
  scicOpt.addEventListener("click", () => {
    game("s");
  });
  rockOpt.addEventListener("click", () => {
    game("r");
  });
};

mainfunction();
