import Header from "./components/Header";
import Results from "./components/Results";
import SavingsItems from "./components/SavingsItems";
import Template from "./components/Template";

function App() {
  return (
    <>
      <Template>
        <Header />
        <SavingsItems />
        <Results />
      </Template>
    </>
  );
}

export default App;
