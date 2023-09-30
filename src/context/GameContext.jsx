import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

GameProvider.propTypes = {
  children: PropTypes.node,
};

const randomDiceRoll = function () {
  let num = Math.trunc(Math.random() * 6) + 1;
  return num;
};

function GameProvider({ children }) {
  const [active, setActive] = useState(null);
  const [diceRolled, setDiceRolled] = useState(1);
  const [score, setScore] = useState(0);

  const reset = function () {
    setScore(0);
    setActive(null);
    setDiceRolled(1);
  };

  const handleScore = function () {
    if (active === diceRolled) {
      setScore((score) => score + diceRolled);
      return;
    }

    return setScore((score) => score - 2);
  };

  const handleDiceRoll = function () {
    if (!active) return toast.error("Select a number");

    let rolledNum = randomDiceRoll();

    setDiceRolled((diceRolled) => (diceRolled = rolledNum));
    toast.success(`Rolled ${diceRolled} active:${active}`);
    handleScore();
    setActive(null);
  };

  return (
    <GameContext.Provider
      value={{
        diceRolled,
        handleDiceRoll,
        active,
        setActive,
        score,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

const useGameContext = function () {
  const context = useContext(GameContext);

  if (!context)
    throw new Error(`
    GameContext was used outside of 
    GameProvider 
  `);

  return context;
};

export { GameProvider, useGameContext };
