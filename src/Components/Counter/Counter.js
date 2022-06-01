import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount(count === 1 ? 1 : (prev) => prev - 1);
  };

  return (
    <section className="counter">
      <h6>Cantidad</h6>
      <div className="counter-action">
        <button
          className="counter-button"
          disabled={count === 1 ? true : false}
          onClick={handleDecrement}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="counter-button"
          disabled={false}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
