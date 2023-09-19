import { useState, useEffect } from "react";
import { TestComponent } from "./Components/TestComponent";

function App() {
  const initialCount = +localStorage.getItem("storageCount") || 0;
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  useEffect(() => {
    localStorage.setItem("storageCount", count);
  }, []);

  return (
    <div>
      <TestComponent />
      <h1>{count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
