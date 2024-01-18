import Header from "./components/Header";
import Result from "./components/Result";
import SavingsItems from "./components/SavingsItems";
import Template from "./components/Template";

function App() {
  return (
    <>
      <Template>
        <Header />
        <SavingsItems />
        <Result />
      </Template>
    </>
  );
}

export default App;
