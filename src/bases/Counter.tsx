import { useState } from "react";

interface propsCounter {
  initialValue?: number;
}
export const Counter = (Props: propsCounter) => {
  const [counter, setCounter] = useState(Props.initialValue || 0);

  const HandlerCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={HandlerCounter}>+1</button>
    </>
  );
};
