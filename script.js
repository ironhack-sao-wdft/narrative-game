const historySpace = document.getElementById("historia");
const op1btn = document.getElementById("opcao1");
const op2btn = document.getElementById("opcao2");

const game = new Game(historySpace, op1btn, op2btn);

op1btn.addEventListener("click", () => {
  game.gameRound = game.gameRound + 1;
  game.gamePoints = game.gamePoints + 1;

  console.log(game.gameRound);
  game.changeStage(game.gameRound);
});

op2btn.addEventListener("click", () => {
  game.gameRound = game.gameRound + 1;
  game.gamePoints = game.gamePoints + 2;

  game.changeStage(game.gameRound);
});
