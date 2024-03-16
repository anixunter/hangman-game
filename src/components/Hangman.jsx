import { useState } from "react";

import randomWord from "../helpers/Words";

import Images from "./Images";
import GameCore from "./GameCore";
import Category from "./Category";
import RestartButton from "./RestartButton";

const Hangman = () => {
  const [nWrong, setNWrong] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [answer, setAnswer] = useState(randomWord());
  const [category, setCategory] = useState("animes");

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    setAnswer(randomWord(value));
    setNWrong(0);
    setGuessed(new Set());
  };

  const restart = () => {
    setNWrong(0);
    setGuessed(new Set());
    setAnswer(randomWord(category));
    setCategory(category);
  };

  return (
    <div className="Hangman">
      <h1 className="Hangman-title">Hangman of {category}</h1>
      <div className="Hangman-flex">
        <Images nWrong={nWrong} />
        <GameCore
          answer={answer}
          guessed={guessed}
          setGuessed={setGuessed}
          nWrong={nWrong}
          setNWrong={setNWrong}
        />
        <div className="Hangman-restart">
          <RestartButton restart={restart} />
          <Category
            category={category}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Hangman;
