import './App.css';
import Calc from "./Calc";

function App() {
  return (
    <div className="calc">

      <div className="calc__keyboard" style={{ width: "300px", margin: "0 auto", display: "grid" }}>
        <Calc />
      </div>
    </div>
  );
}

export default App;
