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
  console.log(results);
  return (
    <div className="App">
      <DrugInteractionsForm />
      <div>
        <Title title="Enter Interactions" />
        {results.map((r) => (
          <div>
            <Caption text={`${r.severity.toUpperCase()}: `} />{" "}
            <span>{r.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
