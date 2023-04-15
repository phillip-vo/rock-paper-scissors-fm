import React, { useContext } from "react";
import "./Rules.scss";
import { GameContext } from "../../context/GameContext";

function Rules() {
  const { isRulesOpen, setIsRulesOpen } = useContext(GameContext);
  return (
    <div className="app__rules">
      <button onClick={() => setIsRulesOpen(true)}>rules</button>
      {isRulesOpen && (
        <div className="app__rules-modal">
          <div>
            <span>rules</span>
            <img
              src="images/icon-close.svg"
              alt="close"
              onClick={() => setIsRulesOpen(false)}
            />
          </div>
          <img src="images/image-rules.svg" alt="rules" />
        </div>
      )}
    </div>
  );
}

export default Rules;
