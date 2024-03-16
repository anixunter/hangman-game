import gameData from "../helpers/gameData";

const { maxWrong } = gameData;

const GameCore = ({ guessed, setGuessed, answer, nWrong, setNWrong }) => {
  const guessedWord = () => {
    return answer
      .split("")
      .map((letter) => (guessed.has(letter) ? letter : "_"));
  };

  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        onClick={() => {
          const updatedSet = new Set([...guessed, letter]);
          setGuessed(updatedSet);
          setNWrong(nWrong + (answer.includes(letter) ? 0 : 1));
        }}
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  };

  let gameState = generateButtons();
  const isWinner = guessedWord().join("") === answer;
  const gameOver = nWrong >= maxWrong;

  isWinner && (gameState = "You Won!");
  gameOver && (gameState = "You Lost!");

  return (
    <div>
      <p className="Hangman-word">{gameOver ? answer : guessedWord()}</p>
      <div className={isWinner || gameOver ? "winloss" : "btns"}>
        {gameState}
      </div>
    </div>
  );
};

export default GameCore;
