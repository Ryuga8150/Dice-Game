import PropTypes from "prop-types";
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

  const handleScore = function () {
    if (!active) return;

    if (active === diceRolled) setScore((score) => score + active);

    return setScore((score) => score - 2);
  };

  const handleDiceRoll = function () {
    const rolledNum = randomDiceRoll();

    setDiceRolled(rolledNum);

    handleScore();
  };

  return (
    <GameContext.Provider
      value={{
        diceRolled,
        handleDiceRoll,
        active,
        setActive,
        score,
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
