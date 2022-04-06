import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="counter">
      <h6>Cantidad</h6>
      <div className="counter-action">
        <button
          className="counter-button"
          onClick={() => setCount(count === 0 ? 0 : count - 1)}
        >
          -
        </button>
        <p>{count}</p>
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
