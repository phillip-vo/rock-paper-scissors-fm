import { useContext } from "react";
import "./App.scss";
import { CompareSelection, Rules, Score, UserSelection } from "./components";
import { GameContext, GameContextProvider } from "./context/GameContext";

function App() {
  const { isRulesOpen, userChoice } = useContext(GameContext);
  return (
    <div className="app">
      <Score />
      {userChoice === "" && <UserSelection />}
      {userChoice !== "" && <CompareSelection />}
      <Rules />
      {isRulesOpen && <div className="app__overlay"></div>}
    </div>
  );
}

export default App;
