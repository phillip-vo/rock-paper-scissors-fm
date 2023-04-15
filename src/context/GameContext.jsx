import React, { createContext, useState } from "react";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("rpsScore")) || 0
  );
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <GameContext.Provider
      value={{
        userChoice,
        setUserChoice,
        computerChoice,
        setComputerChoice,
        score,
        setScore,
        isRulesOpen,
        setIsRulesOpen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
