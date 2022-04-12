import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount(count === 0 ? 0 : (prev) => prev - 1);
  };

  return (
    <section className="counter">
      <h6>Cantidad</h6>
      <div className="counter-action">
        <button className="counter-button" onClick={handleDecrement}>
          -
        </button>
        <p>{count}</p>
        <button className="counter-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
