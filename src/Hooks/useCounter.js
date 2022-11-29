import { useEffect, useState } from "react";

export const useCounter = (number) => {
  const [counter, setCounter] = useState(number);

  const decrement = () => {
    setCounter(counter - 1);
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    if (counter < number) {
      setCounter(number);
    }
  }, [counter]);

  return { counter, decrement, increment, setCounter };
};
