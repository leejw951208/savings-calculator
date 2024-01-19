import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import SavingsItems from "./components/SavingsItems";
import Template from "./components/Template";

function App() {
  const [results, setResults] = useState({});

  const handleResults = (money, period, interest, calculate) => {
    setResults({ money, period, interest, calculate });
  };

  return (
    <>
      <Template>
        <Header />
        <SavingsItems onResults={handleResults} />
        <Results
          money={results.money}
          period={results.period}
          interest={results.interest}
          calculate={results.calculate}
        />
      </Template>
    </>
  );
}

export default App;
