import "../src/Global.scss"
import { useState } from "react"
import Height from "./components/Height"
import Weight from "./components/Weight"
import Calc from "./components/Calc"
import Reset from "./components/Reset"
import Table from "./components/Table"
function App() {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();

  const calc = () => {
    if (height > 0 && weight > 0) {
      let res = weight / (height ** 2)
      setResult(res)
    } else {
      alert("digite um valor")

      document.querySelectorAll('input').forEach(
        input => input.value = ""
      )
      setResult();

    }
  }
  const reset = () => {
    document.querySelectorAll('input').forEach(
      input => input.value = ""
    )
    setResult();
  }

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <Height height={setHeight} />
      <Weight weight={setWeight} />
      <Calc calc={calc} />
      <Reset reset={reset} />
      <Table />
      {result ? <h3>Seu IMC: {result.toFixed(2)}</h3> : ""}

    </div>
  );
}

export default App;
