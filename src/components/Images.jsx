import gameData from "../helpers/gameData";

const { images } = gameData;

const Images = ({ nWrong }) => {
  return (
    <div className="Hangman-counter">
      <img src={images[nWrong]} />
      <p>Wrong Guesses: {nWrong}</p>
    </div>
  );
};

export default Images;
