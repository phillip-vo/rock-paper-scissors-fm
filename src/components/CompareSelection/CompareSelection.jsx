import React, { useContext, useEffect, useState } from "react";
import "./CompareSelection.scss";
import { GameContext } from "../../context/GameContext";
import Paper from "../Paper/Paper";
import Scissors from "../Scissors/Scissors";
import Rock from "../Rock/Rock";

const handleChoice = (choice) => {
  switch (choice) {
    case "paper":
      return <Paper />;
    case "scissors":
      return <Scissors />;
    case "rock":
      return <Rock />;
  }
};

const handleComputerChoice = () => {
  const choices = ["paper", "scissors", "rock"];

  const rand = Math.floor(Math.random() * 3);

  const choice = choices.find((item, index) => index === rand);

  return choice;
};

const compareChoices = (userChoice, computerChoice) => {
  let result = "";

  if (userChoice === "paper" && computerChoice === "rock") {
    result = "user";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result = "computer";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result = "user";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result = "computer";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    result = "user";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "computer";
  } else {
    result = "tie";
  }

  return result;
};

const handleScore = (result, score) => {
  let newScore = 0;

  if (result === "user") {
    newScore = score + 1;
  }

  if (result === "computer" && score !== 0) {
    newScore = score - 1;
  }

  return newScore;
};

function CompareSelection() {
  const {
    userChoice,
    setUserChoice,
    computerChoice,
    setComputerChoice,
    score,
    setScore,
  } = useContext(GameContext);

  useEffect(() => {
    const timer = setTimeout(
      () => setComputerChoice(handleComputerChoice()),
      2000
    );

    return () => clearTimeout(timer);
  }, [handleComputerChoice]);

  const result = compareChoices(userChoice, computerChoice);

  useEffect(() => {
    if (result === "user") {
      setScore(score + 1);
    }

    if (result === "computer" && score !== 0) {
      setScore(score - 1);
    }
  }, [result]);

  useEffect(() => {
    localStorage.setItem("rpsScore", score);
  }, [score]);

  return (
    <div className="app__compareselection">
      <div className="app__compareselection-user">
        <div className="app__compareselection-align">
          <span>you picked</span>
          <div className="app__compareselection-user-choice">
            {handleChoice(userChoice)}
            {result === "user" && (
              <div className="app__compareselection-winner">
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </div>
      {userChoice !== "" && computerChoice !== "" && (
        <div className="app__compareselection-result">
          <span>
            {result === "user"
              ? "you win"
              : result === "computer"
              ? "you lose"
              : "tie"}
          </span>
          <button
            onClick={() => {
              setUserChoice("");
              setComputerChoice("");
            }}
          >
            play again
          </button>
        </div>
      )}
      <div className="app__compareselection-computer">
        <div className="app__compareselection-align">
          <span>the house picked</span>
          {computerChoice !== "" && (
            <div className="app__compareselection-computer-choice">
              {handleChoice(computerChoice)}
              {result === "computer" && (
                <div className="app__compareselection-winner">
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          )}
          {computerChoice === "" && (
            <div className="app__compareselection-circle"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompareSelection;
