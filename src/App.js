import { useState } from "react";

function App() {
  const [count, changeCount] = useState(0);
  function increase() {
    changeCount(count + 1);
  }
  function decrease() {
    changeCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
