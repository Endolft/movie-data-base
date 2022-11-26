import { useState } from "react";

export const useCounter = (number) => {
  const [counter, setCounter] = useState(number);

  const decrement = () => {
    setCounter(counter - 1);
  };
  const increment = () => {
    setCounter(counter + 1);
  };

  return { counter, decrement, increment };
};
