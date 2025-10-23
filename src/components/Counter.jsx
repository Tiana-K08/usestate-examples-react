import { useState } from 'react';
import './Counter.css';
import Button from './Button.jsx';

function Counter() {
  const [counter, setCounter] = useState(0);
  // let x = 0;

  const handleIncrease = () => {
    setCounter(counter + 1);
    // x = x + 1;
    // console.log(x);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
    // x = x - 1;
    // console.log(x);
  };

  return (
    <div className="counter-wrapper">
      <h1>Example №1</h1>
      <div className="result">
        <span>{counter}</span>
      </div>
      <div className="btn-container">
        <Button onClick={handleIncrease} label="Increase +" />
        <Button onClick={handleDecrease} label="Decrease -" />
      </div>
    </div>
  );
}

export default Counter;
