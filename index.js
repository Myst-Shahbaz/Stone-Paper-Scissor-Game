let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".images");
const msg = document.querySelector("#msg");

const userscorenumber = document.querySelector("#user-score");
const computersccorenumber = document.querySelector("#comp-score");

choices.forEach((option) => {
  // console.log(option);
  option.addEventListener("click", () => {
    let userchoice = option.getAttribute("id");
    playgame(userchoice);
  });
});

const playgame = (userchoice) => {
  console.log(`Userchoice is ${userchoice}`);

  const computerchoice = compchoice();
  console.log(`computerchoice is ${computerchoice}`);

  if (userchoice === computerchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

const compchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawgame = () => {
  console.log("Draw");
  msg.innerText = "Draw!";
};

const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorenumber.innerText = userscore;
    console.log("you Win");
    msg.innerText = "User Win!";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    computersccorenumber.innerText = compscore;
    console.log("you lose");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
  }
};
