import React, { useContext } from "react";
import "./UserSelection.scss";
import Paper from "../Paper/Paper";
import Scissors from "../Scissors/Scissors";
import Rock from "../Rock/Rock";
import { GameContext } from "../../context/GameContext";

function UserSelection() {
  const { setUserChoice } = useContext(GameContext);

  return (
    <div className="app__userselection">
      <img
        src="images/bg-triangle.svg"
        alt="background"
        className="app__userselection-bg"
      />
      <div
        className="app__userselection-paper"
        onClick={() => setUserChoice("paper")}
      >
        <Paper />
      </div>
      <div
        className="app__userselection-scissors"
        onClick={() => setUserChoice("scissors")}
      >
        <Scissors />
      </div>
      <div
        className="app__userselection-rock"
        onClick={() => setUserChoice("rock")}
      >
        <Rock />
      </div>
    </div>
  );
}

export default UserSelection;
