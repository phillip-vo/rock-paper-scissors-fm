import React, { useContext } from "react";
import "./Score.scss";
import { GameContext } from "../../context/GameContext";

function Score() {
  const { score } = useContext(GameContext);
  return (
    <div className="app__score">
      <div className="app__score-logo">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div className="app__score-card">
        <span>score</span>
        <span>{score}</span>
      </div>
    </div>
  );
}

export default Score;
