import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Title from "./ui-library/title";
import Caption from "./ui-library/caption";
import DrugInteractionsForm from "./components/drug-interactions";

function App() {
  const results = useSelector(
    ({ drugInteractions }) => drugInteractions.results
  );

  return (
    <div className="App">
      <DrugInteractionsForm />
      <div>
        <Title title="Enter Interactions" />
        {results.map((r) => (
          <div>
            {r[0] && <Caption text={`${r[0].toUpperCase()}: `} />}
            <span>{r[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
