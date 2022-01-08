import "./App.scss";
import { useState } from "react";
import SquareEmpty from "./SquareEmpty";
import Title from "./Title";
import SquareFilled from "./SquareFilled";

function App() {
  const [numberSquare, setNumberSquare] = useState(0);
  return (
    <div className="App">
      <Title numberSquare={numberSquare} />
      <div className="flex-container">
        <div className="flex-container">
          {[...Array(numberSquare)].map((value, index) => {
            return <SquareFilled key={index} />;
          })}
        </div>
        <SquareEmpty
          numberSquare={numberSquare}
          setNumberSquare={setNumberSquare}
        />
      </div>
    </div>
  );
}

export default App;
