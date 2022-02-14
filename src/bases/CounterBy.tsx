import { useState } from "react";

interface propsCounter {
  initialValue?: number;
}
interface CounterState {
  counter: number;
  clicks: number;
}
export const CounterBy = ({ initialValue }: propsCounter) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue || 0,
    clicks: 0,
  });

  const HandlerCounter = (value = 0) => {
    setCounterState(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };
  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => HandlerCounter(1)}>+1</button>
      <button onClick={() => HandlerCounter(5)}>+5</button>
    </>
  );
};
