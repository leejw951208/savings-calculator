import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import SavingsItems from "./components/SavingsItems";
import Template from "./components/Template";

function App() {
  const [results, setResults] = useState({});

  const handleResults = (money, period, interest, calculate) => {
    setResults({
      money,
      period,
      interest,
      calculate,
    });
  };

  const handleReset = () => {
    setResults({});
  };

  return (
    <Template>
      <Header />
      <SavingsItems onResults={handleResults} onReset={handleReset} />
      <Results results={results} />
      <a href="https://study-app-eta.vercel.app/" target="_blank">
        More projects
      </a>
    </Template>
  );
}

export default App;
