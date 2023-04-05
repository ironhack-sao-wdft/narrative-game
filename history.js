class Game {
  constructor(historySpace, op1, op2) {
    this.historySpace = historySpace;
    this.op1btn = op1;
    this.op2btn = op2;
    this.gameRound = 1;
    this.gamePoints = 0;
    this.historyOptions = [
      {
        historia:
          "Você segue a luz e chega a uma casa abandonada. Você ouve um barulho dentro da casa.",
        opcao1: "Entrar na casa",
        opcao2: "Continuar seguindo a luz",
        conditionToShow: 2,
        oddOrEven: "odd",
      },
      {
        historia:
          "Você entra na casa e encontra um tesouro escondido. O que você faz?",
        opcao1: "Pegar o tesouro",
        opcao2: "Deixar o tesouro e sair da casa",
        conditionToShow: 2,
        oddOrEven: "even",
      },
    ];
  }

  changeStage(stage) {
    if (this.gamePoints % 2 === 0) {
      for (let i = 0; i < this.historyOptions.length; i++) {
        if (
          this.historyOptions[i].oddOrEven === "odd" &&
          stage === this.historyOptions[i].conditionToShow
        ) {
          this.historySpace.innerText = this.historyOptions[i].historia;
          this.op1btn.innerText = this.historyOptions[i].opcao1;
          this.op2btn.innerText = this.historyOptions[i].opcao2;
          return;
        }
      }
    } else {
      for (let i = 0; i < this.historyOptions.length; i++) {
        if (
          this.historyOptions[i].oddOrEven === "even" &&
          stage === this.historyOptions[i].conditionToShow
        ) {
          this.historySpace.innerText = this.historyOptions[i].historia;
          this.op1btn.innerText = this.historyOptions[i].opcao1;
          this.op2btn.innerText = this.historyOptions[i].opcao2;
          return;
        }
      }
    }
  }
}
