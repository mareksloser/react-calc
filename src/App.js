import './App.css';
import Keyboard from "./Keyboard";

function App() {
  return (
    <div className="calc" style={{ width: "300px", margin: "0 auto", display: "grid" }}>

        <div className="calc__keyboard">
            <Keyboard/>
        </div>

    </div>
  );
}

export default App;
