let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".images");

const playgame = (Userchoice) => {
  console.log(`User choice is ${Userchoice}`);

  const compuchoice = gencompchoice();

  console.log(`Computer choice is ${compuchoice}`);

  if(Userchoice === compuchoice){
    drawgame();
  }
};

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomvalue = Math.floor(Math.random() * 3);
  return options[randomvalue];
};

const drawgame = () => {
  console.log("Game Draw");
};
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
    playgame(Userchoice);
  });
});
