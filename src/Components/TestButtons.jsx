import { useState, useEffect } from "react";

export const TestButtons = () => {
  const initialCount = +localStorage.getItem("storageCount") || 0;
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  useEffect(() => {
    localStorage.setItem("storageCount", count);
  }, []);

  return (
    <>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <h1>{count}</h1>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};
