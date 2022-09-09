import { MouseEventHandler, useState, useEffect } from "react";
import "./Counter.css";

interface CounterProps {
  setCounter?: any;
}

const Counter: React.FC<CounterProps> = ({ setCounter }) => {
  const [count, setCount] = useState<number>(1);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> = (): void => {
    setCount((prev: number) => prev + 1);
    setCounter((prev: number) => prev + 1);
  };

  const handleDecrement: MouseEventHandler<HTMLButtonElement> = (): void => {
    setCount(count === 1 ? 1 : (prev: number) => prev - 1);
    setCounter(count === 1 ? 1 : (prev: number) => prev - 1);
  };

  useEffect(() => {
    setCounter(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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
