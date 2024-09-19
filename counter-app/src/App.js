import React, { useState } from 'react';
import './App.css';  // Import the CSS file

function App() {
  // Initialize the state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the counter to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className="count">{count}</p>
      <div className="buttonContainer">
        <button onClick={increment} className="button">Increment</button>
        <button onClick={decrement} className="button">Decrement</button>
        <button onClick={reset} className="button">Reset</button>
      </div>
    </div>
  );
}

export default App;
